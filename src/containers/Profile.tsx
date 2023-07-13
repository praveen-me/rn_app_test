import React from 'react';
import {View} from 'react-native';

import Screen from 'viamagnus/src/components/Screen';
import Header from 'viamagnus/src/components/Header';
import UserInfo from 'viamagnus/src/components/UserInfo';

import HeaderIcon from 'viamagnus/src/assets/svg/HeaderIcon';
import ChatIcon from 'viamagnus/src/assets/svg/ChatIcon';
import LogoutIcon from 'viamagnus/src/assets/svg/LogoutIcon';
import Text from 'viamagnus/src/components/Text';
import Button from 'viamagnus/src/components/Button';
import commonStyles from 'viamagnus/src/styles/common';
import styles from 'viamagnus/src/styles/containers/Profile';
import UpWithSuccessIcon from 'viamagnus/src/assets/svg/UpWithSuccessIcon';
import DownWithDangerIcon from 'viamagnus/src/assets/svg/DownWithDangerIcon';
import {Spacing} from 'viamagnus/src/styles/metrics';
import UserTabs from 'viamagnus/src/components/UserTabs';

export default function Profile() {
  return (
    <Screen>
      <View style={{paddingHorizontal: Spacing.medium}}>
        <Header
          leftIcon={<HeaderIcon />}
          title="Profile"
          rightIcon={<ChatIcon />}
        />

        <UserInfo />

        <Button
          onPress={() => {}}
          style={[
            styles.logoutContainer,
            commonStyles.row,
            commonStyles.justifyCenter,
          ]}>
          <LogoutIcon />
          <Text.H3 styles={styles.logoutText}>Logout</Text.H3>
        </Button>

        <View
          style={[
            styles.statsContainer,
            commonStyles.row,
            commonStyles.justifyBetween,
          ]}>
          <View>
            <Text.H3 styles={styles.statsHeader}>Under or Over</Text.H3>
            <View style={[commonStyles.row, styles.statsValueContainer]}>
              <UpWithSuccessIcon />
              <Text.H3 styles={styles.statsValue}>81%</Text.H3>
            </View>
          </View>
          <View>
            <View>
              <Text.H3 styles={styles.statsHeader}>Top 5</Text.H3>
              <View style={[commonStyles.row, styles.statsValueContainer]}>
                <DownWithDangerIcon />
                <Text.H3 styles={styles.statsValue}>-51%</Text.H3>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <UserTabs />
    </Screen>
  );
}
