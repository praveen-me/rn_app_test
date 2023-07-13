import {View} from 'react-native';
import React from 'react';
import Text from 'viamagnus/src/components/Text';
import commonStyles from 'viamagnus/src/styles/common';
import styles from 'viamagnus/src/styles/components/Prediction';
import Button from 'viamagnus/src/components/Button';
import DownIcon from 'viamagnus/src/assets/svg/DownIcon';
import UpIcon from 'viamagnus/src/assets/svg/UpIcon';

type Option = {
  title: string;
  value: string;
};

interface IPredictionProps {
  options: Option[];
}

export default function Prediction(props: IPredictionProps) {
  return (
    <View style={styles.predictionContainer}>
      <View style={[commonStyles.row, commonStyles.justifyBetween]}>
        {props.options.map(option => (
          <View key={option.title} style={commonStyles.alignCenter}>
            <Text.H4 styles={styles.optionTitle}>{option.title}</Text.H4>
            <Text.H3 styles={styles.optionValue}>{option.value}</Text.H3>
          </View>
        ))}
      </View>

      <View style={styles.bottomContainer}>
        <Text.H3 styles={styles.whatUrPred}>What's your prediction?</Text.H3>

        <View
          style={[
            commonStyles.row,
            commonStyles.justifyBetween,
            styles.btnContainer,
          ]}>
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
            <Text.H3 styles={styles.btnText}>Under</Text.H3>
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
            <Text.H3 styles={styles.btnText}>Over</Text.H3>
          </Button>
        </View>
      </View>
    </View>
  );
}
