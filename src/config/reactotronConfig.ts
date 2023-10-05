/* This file allows us connect to reactotron. */
import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';
import { QueryClientManager, reactotronReactQuery } from 'reactotron-react-query';
import { queryClient } from './reactQueryConfig';

declare global {
  interface Console {
    tron: any;
  }
}

const { scriptURL } = NativeModules.SourceCode;
const host = scriptURL.split('://')[1].split(':')[0];

const queryClientManager = new QueryClientManager({ queryClient } as any);

const reactotron = Reactotron.use(reactotronReactQuery(queryClientManager))
  .configure({
    name: 'Pacific Wide Virtual Assistant',
    host,
    onDisconnect: () => {
      queryClientManager.unsubscribe();
    },
  })
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate|127.0.0.1/,
    },
  })
  .connect();

console.tron = reactotron;
export default reactotron;
