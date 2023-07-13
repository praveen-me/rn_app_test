import {DimensionValue, View} from 'react-native';
import React from 'react';
import PersonIcon from 'viamagnus/src/assets/svg/PersonIcon';
import Text from 'viamagnus/src/components/Text';
import ChartIcon from 'viamagnus/src/assets/svg/ChartsIcon';
import styles from 'viamagnus/src/styles/components/HomeOverView';
import commonStyles from 'viamagnus/src/styles/common';

interface IHomeOverViewProps {
  underPrediction: number;
  overPrediction: number;
}

export default function HomeOverView(props: IHomeOverViewProps) {
  const {underPrediction, overPrediction} = props;

  const total = underPrediction + overPrediction;

  const leftPercentage = `${
    (underPrediction * 100) / total
  }%` as DimensionValue;

  const rightPercentage = `${
    (overPrediction * 100) / total
  }%` as DimensionValue;

  return (
    <View style={styles.container}>
      <View style={[commonStyles.row, commonStyles.justifyBetween]}>
        <View style={[commonStyles.row]}>
          <PersonIcon />
          <Text.H3 styles={styles.highlightedText}>355 Players</Text.H3>
        </View>
        <View style={[commonStyles.row]}>
          <ChartIcon />
          <Text.H3 styles={styles.highlightedText}>View Chart</Text.H3>
        </View>
      </View>

      <View style={[styles.progressBarWrapper, commonStyles.row]}>
        <View
          style={[
            styles.progressBar,
            styles.progressLeft,
            {width: leftPercentage},
          ]}
        />
        <View
          style={[
            styles.progressBar,
            styles.progressRight,
            {width: rightPercentage},
          ]}
        />
      </View>

      <View style={[commonStyles.row, commonStyles.justifyBetween]}>
        <Text.H4 styles={styles.underProgressText}>232 predicted under</Text.H4>
        <Text.H4 styles={styles.underProgressText}>123 predicted over</Text.H4>
      </View>
    </View>
  );
}
