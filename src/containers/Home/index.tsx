import {View} from 'react-native';
import React from 'react';
import Screen from 'viamagnus/src/components/Screen';
import Text from 'viamagnus/src/components/Text';
import styles from 'viamagnus/src/styles/containers/Home';
import commonStyles from 'viamagnus/src/styles/common';

import CoinInflation from 'viamagnus/src/containers/Home/CoinInflation';
import Prediction from 'viamagnus/src/components/Prediction';
import HomeOverView from 'viamagnus/src/components/HomeOverView';
import PredictionModal from 'viamagnus/src/components/PredictionModal';

export default function Home() {
  let options = [
    {
      title: 'Prize Pool',
      value: '$12000',
    },
    {
      title: 'Under',
      value: '3.25x',
    },
    {
      title: 'Over',
      value: '1.25x',
    },
    {
      title: 'Entry Fees',
      value: '5',
    },
  ];

  const underPrediction = 232;
  const overPrediction = 183;

  return (
    <Screen style={commonStyles.flex1}>
      <View style={styles.container}>
        <Text.H3>Today's Game</Text.H3>

        <View style={styles.heroInfoContainer}>
          <CoinInflation />
          <Prediction options={options} />
          <HomeOverView
            underPrediction={underPrediction}
            overPrediction={overPrediction}
          />
        </View>
      </View>
      <PredictionModal />
    </Screen>
  );
}
