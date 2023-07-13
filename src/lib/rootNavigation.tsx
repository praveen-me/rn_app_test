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
