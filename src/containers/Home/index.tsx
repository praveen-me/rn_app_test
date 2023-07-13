import {View} from 'react-native';
import React from 'react';
import Screen from 'viamagnus/src/components/Screen';
import Text from 'viamagnus/src/components/Text';
import styles from 'viamagnus/src/styles/containers/Home';
import commonStyles from 'viamagnus/src/styles/common';

import CoinInflation from 'viamagnus/src/containers/Home/CoinInflation';
import Prediction from 'viamagnus/src/components/Prediction';

export default function Home() {
  return (
    <Screen style={commonStyles.flex1}>
      <View style={styles.container}>
        <Text.H3>Today's Game</Text.H3>

        <View style={styles.heroInfoContainer}>
          <CoinInflation />
          <Prediction />
        </View>
      </View>
    </Screen>
  );
}
