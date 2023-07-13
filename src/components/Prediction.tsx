import {View} from 'react-native';
import React from 'react';
import Text from 'viamagnus/src/components/Text';
import commonStyles from 'viamagnus/src/styles/common';
import styles from 'viamagnus/src/styles/components/Prediction';
import Button from 'viamagnus/src/components/Button';
import DownIcon from 'viamagnus/src/assets/svg/DownIcon';
import UpIcon from 'viamagnus/src/assets/svg/UpIcon';

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

export default function Prediction() {
  return (
    <View style={styles.predictionContainer}>
      <View style={[commonStyles.row, commonStyles.justifyBetween]}>
        {options.map(option => (
          <View key={option.title} style={commonStyles.alignCenter}>
            <Text.H4 styles={styles.optionTitle}>{option.title}</Text.H4>
            <Text.H3 styles={styles.optionValue}>{option.value}</Text.H3>
          </View>
        ))}
      </View>

      <View>
        <Text.H3>What's your prediction?</Text.H3>

        <View style={[commonStyles.row, commonStyles.justifyBetween]}>
          <Button
            style={[
              commonStyles.row,
              commonStyles.justifyCenter,
              commonStyles.alignCenter,
              styles.btn,
              styles.underBtn,
            ]}
            onPress={() => {}}>
            <DownIcon />
            <Text.H3>Under</Text.H3>
          </Button>
          <Button
            style={[
              commonStyles.row,
              commonStyles.justifyCenter,
              commonStyles.alignCenter,

              styles.btn,
              styles.overBtn,
            ]}
            onPress={() => {}}>
            <UpIcon />
            <Text.H3>Over</Text.H3>
          </Button>
        </View>
      </View>
    </View>
  );
}
