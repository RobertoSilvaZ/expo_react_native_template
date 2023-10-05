/* eslint-disable no-prototype-builtins */
import _, { isEqual } from 'lodash';
import { State, StateCreator } from 'zustand/vanilla';

type DiffResult = {
  type: 'Updated' | 'Added' | 'Removed';
  path: string;
  oldValue?: any;
  newValue?: any;
};

const zustandDevTool =
  (name: string) =>
  <T extends State>(config: StateCreator<T>): StateCreator<T> =>
  (set, get, api) => {
    const newState = config(
      payload => {
        const currentState = get();
        set(payload);
        const nextState = get();

        // Get the caller name
        const callerNameString = new Error().stack?.split('\n')[2].trim();
        const callerName = callerNameString?.substring(0, callerNameString.indexOf('('));
        const callerNameTrimmed = callerName?.substring(2, callerName.length - 1).trim();

        // Get the caller path
        const callerPath = callerNameString
          ?.substring(callerNameString.indexOf('src'), callerNameString.indexOf(')'))
          .trim();
        const path = callerPath?.substring(0, callerPath.indexOf('.bundle')).trim();

        // Filter out functions from the state
        const currentStateFiltered = filterOutFunctions(currentState as StateCreator<T>);
        const nextStateFiltered = filterOutFunctions(nextState as StateCreator<T>);

        // Get the type of the action
        const type: DiffResult['type'] = isEqual(currentStateFiltered, nextStateFiltered) ? 'Updated' : 'Added';

        // Get the differences between the states
        const differences = getObjectDifferences(currentStateFiltered, nextStateFiltered);

        // Print the state to the console using tron
        console.tron.display({
          name: callerNameTrimmed || 'zustand',
          preview: `${name} - (🐻 Zustand)`,
          value: { currentState: currentStateFiltered, nextState: nextStateFiltered, differences, type, path },
          important: true,
        });
      },
      get,
      api
    );

    return newState;
  };

export default zustandDevTool;

function filterOutFunctions<T extends object>(inputState: T): Partial<T> {
  return Object.keys(inputState)
    .filter(key => typeof (inputState as Record<string, any>)[key] !== 'function')
    .reduce((obj: any, key) => {
      obj[key] = (inputState as Record<string, any>)[key];
      return obj;
    }, {});
}
type AnyObject = {
  [key: string]: any;
};

function getObjectDifferences(obj1: AnyObject, obj2: AnyObject): DiffResult[] {
  const diffs: DiffResult[] = [];

  function compare(oldObj: AnyObject, newObj: AnyObject, path: string = '') {
    if (_.isEqual(oldObj, newObj)) {
      return;
    }

    if (_.isArray(oldObj) && _.isArray(newObj)) {
      _.differenceWith(oldObj, newObj, _.isEqual).forEach(diffItem => {
        diffs.push({
          type: 'Removed',
          path: path,
          oldValue: diffItem,
        });
      });

      _.differenceWith(newObj, oldObj, _.isEqual).forEach(diffItem => {
        diffs.push({
          type: 'Added',
          path: path,
          newValue: diffItem,
        });
      });
    } else if (_.isObject(oldObj) && _.isObject(newObj)) {
      _.each(oldObj, (value, key) => {
        if (!newObj.hasOwnProperty(key)) {
          diffs.push({
            type: 'Removed',
            path: `${path}${path ? '.' : ''}${key}`,
            oldValue: value,
          });
        } else {
          compare(value, newObj[key], `${path}${path ? '.' : ''}${key}`);
        }
      });

      _.each(newObj, (value, key) => {
        if (!oldObj.hasOwnProperty(key)) {
          diffs.push({
            type: 'Added',
            path: `${path}${path ? '.' : ''}${key}`,
            newValue: value,
          });
        }
      });
    } else {
      diffs.push({
        type: 'Updated',
        path: path,
        oldValue: oldObj,
        newValue: newObj,
      });
    }
  }

  compare(obj1, obj2);

  return diffs;
}
