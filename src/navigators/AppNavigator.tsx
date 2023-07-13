import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

// styling
// import theme from 'audvice/src/styles/theme';
// libs

import Home from '../containers/Home';
import League from '../containers/League';
import Research from '../containers/Research';
import LeaderBoard from '../containers/LeaderBoard';
import Profile from '../containers/Profile';

import {NavigatorRouteProps, Screen} from '../lib/rootNavigation';

// Icons
import HomeIcon from '../assets/svg/Home';
import Trophy from '../assets/svg/Trophy';
import LeaderBoardIcon from '../assets/svg/LeaderBoard';
import ProfileIcon from '../assets/svg/Profile';
import SearchIcon from '../assets/svg/Search';

// TODO: Fix the authenticated stack for common screens

type AppTabParams = {
  Home: undefined;
  League: undefined;
  Research: undefined;
  LeaderBoard: undefined;
  Profile: undefined;
};

export type AudviceTabScreenProps<RouteName extends keyof AppTabParams> =
  NavigatorRouteProps<AppTabParams, RouteName>;

const AppNavigator = createBottomTabNavigator<AppTabParams>();

let screens: Screen<AppTabParams>[] = [
  {
    name: 'Home',
    Component: Home,
  },
  {
    name: 'League',
    Component: League,
  },
  {
    name: 'Research',
    Component: Research,
  },
  {
    name: 'LeaderBoard',
    Component: LeaderBoard,
  },
  {
    name: 'Profile',
    Component: Profile,
  },
];

// function BottomTabs(props: BottomTabBarProps) {
//   return <BottomTabBar {...props} />;
// }

function RenderIcon(route: RouteProp<AppTabParams, keyof AppTabParams>) {
  return ({focused}) => {
    let Icon = <></>;

    switch (route.name) {
      case 'Home':
        Icon = <HomeIcon />;

        break;
      case 'League':
        Icon = <Trophy />;
        break;
      case 'LeaderBoard':
        Icon = <LeaderBoardIcon />;
        break;
      case 'Profile':
        Icon = <ProfileIcon />;
        break;
      case 'Research':
        Icon = <SearchIcon />;
    }

    return <View style={styles.tabBarItemContainer}>{Icon}</View>;
  };
}

export default function AppTabs() {
  return (
    <>
      <AppNavigator.Navigator>
        {screens.map(screen => (
          <AppNavigator.Screen
            name={screen.name}
            component={screen.Component}
            key={screen.name}
            options={({route}) => {
              return {
                tabBarIcon: RenderIcon(route),
                header: () => {},
                tabBarLabel: () => null,
              };
            }}
          />
        ))}
      </AppNavigator.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  activeDot: {
    height: 4,
    width: 4,
    borderRadius: 2,
    // backgroundColor: theme.colors.actions,
    bottom: -13,
    position: 'absolute',
  },
  tabBarItemContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: moderateVerticalScale(10),
  },
  recordButton: {
    zIndex: 10001,
    backgroundColor: '#E2555F',
    position: 'absolute',
    top: -35,
    height: 60,
    width: 60,
    left: -30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(226, 85, 95, 0.25)',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
});
