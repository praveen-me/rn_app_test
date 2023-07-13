import React,  from 'react';
import {StyleSheet, View} from 'react-native';
import {
  BottomTabBar,
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// components
// import AudioPlayer from 'audvice/src/components/AudioPlayer';
// import Button from 'audvice/src/components/Button';


// utils

// import {NavigatorRouteProps, Screen} from 'viamagnus_challenge/src/lib/rootNavigation';
import {AuthenticatedStackParams} from 'audvice/src/navigators/AuthenticatedStack';
import HomeNavigator from 'audvice/src/navigators/HomeNavigator';

// styling
import theme from 'audvice/src/styles/theme';
// libs
import MyCollection from './CollectionStack';

import SearchNavigator from 'audvice/src/navigators/SearchNaviagtor';
import NotificationNavigator from 'audvice/src/navigators/NotificationNavigator';

import MainIcon from 'audvice/src/components/Icon';
import useUserRole from 'audvice/src/utils/hooks/useUserRole';

// TODO: Fix the authenticated stack for common screens

type AudviceTabParams = {
  Home: undefined;
  MyCollection: undefined;
  Search: undefined;
  Notification: undefined;
  RecordButton: undefined;
};

export type AudviceTabScreenProps<RouteName extends keyof AudviceTabParams> =
  NavigatorRouteProps<AudviceTabParams, RouteName>;

const Authenticated = createBottomTabNavigator<AudviceTabParams>();

let screens: Screen<AudviceTabParams>[] = [
  {
    name: 'Home',
    Component: HomeNavigator,
  },
  {
    name: 'MyCollection',
    Component: MyCollection,
  },
  {
    name: 'RecordButton',
    Component: () => null,
  },
  {
    name: 'Search',
    Component: SearchNavigator,
  },
  {
    name: 'Notification',
    Component: NotificationNavigator,
  },
];

function BottomTabs(props: BottomTabBarProps) {
  return (
    <>
      <AudioPlayer />
      <BottomTabBar {...props} />
    </>
  );
}

export default function AudviceTabs() {
  const navigation =
    useNavigation<StackNavigationProp<AuthenticatedStackParams>>();

  const {isListener} = useUserRole();

  if (isListener) {
    screens = screens.filter(item => item.name !== 'RecordButton');
  }

  return (
    <>
      <Authenticated.Navigator tabBar={props => <BottomTabs {...props} />}>
        {screens.map(screen => (
          <Authenticated.Screen
            name={screen.name}
            component={screen.Component}
            key={screen.name}
            options={({route}) => {
              return {
                tabBarIcon: ({focused}) => {
                  let Icon = null;

                  switch (route.name) {
                    case 'Home':
                      Icon = (
                        <MainIcon
                          icon="home"
                          type="medium"
                          active={focused}
                          size={32}
                        />
                      );

                      break;
                    case 'MyCollection':
                      Icon = (
                        <MainIcon
                          icon="playlist_play"
                          type="medium"
                          active={focused}
                          size={32}
                        />
                      );
                      break;
                    case 'Notification':
                      Icon = (
                        <MainIcon
                          icon="notifications"
                          type="medium"
                          active={focused}
                          size={32}
                        />
                      );
                      break;
                    case 'RecordButton':
                      Icon = (
                        <Button
                          style={styles.recordButton}
                          onPress={() => {
                            navigation.navigate('RecordTrack');
                          }}>
                          <MainIcon
                            icon="keyboard_voice"
                            type="medium"
                            active={focused}
                            fill={'white'}
                            size={32}
                          />
                        </Button>
                      );
                      break;
                    case 'Search':
                      Icon = (
                        <MainIcon
                          icon="search"
                          type="medium"
                          active={focused}
                          size={32}
                        />
                      );
                  }

                  return (
                    <View style={styles.tabBarItemContainer}>
                      {Icon}

                      {focused && route.name !== 'RecordButton' && (
                        <View style={styles.activeDot} />
                      )}
                    </View>
                  );
                },
                header: () => {},
                tabBarLabel: () => null,
              };
            }}
          />
        ))}
      </Authenticated.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  activeDot: {
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.actions,
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
