import React from 'react';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

// import Config from 'react-native-config';
import {
  // createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import AppTabs from '../navigators/AppNavigator';

// import {
//   isNavigationReadyRef,
//   navigationRef,
// } from 'audvice/src/services/navigationService';
// import AppNavigator from 'audvice/src/navigators/AppNavigator';

// import {useDispatch, useSelector} from 'react-redux';
// import {getShowTnCScreen} from 'audvice/src/redux/selectors/misc.selectors';
// import {Linking, Platform} from 'react-native';
// import {
//   navigationReady,
//   toggleGlobalLoading,
// } from 'audvice/src/redux/actions/misc.actions';
// import storage from 'audvice/src/lib/storage';
// import Deeplinks from 'audvice/src/services/deeplinks';

type NavigatorBaseType<
  List extends ParamListBase,
  Route extends keyof List,
> = StackNavigationProp<List, Route>;

export type Screen<T> = {
  name: keyof T;
  Component: React.ComponentType<any>;
};

export interface NavigatorRouteProps<
  ParamsList extends ParamListBase,
  RouteName extends keyof ParamsList,
> {
  navigation: NavigatorBaseType<ParamsList, RouteName>;
  route: RouteProp<ParamsList, RouteName>;
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
}

export default RootNavigator;
