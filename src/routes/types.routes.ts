import { StackNavigationProp } from '@react-navigation/stack';
import { Screens } from './constants.routes';

type RootStackParamList = {
  [key in (typeof Screens)[keyof typeof Screens]]: undefined;
};

export type ScreenProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};
