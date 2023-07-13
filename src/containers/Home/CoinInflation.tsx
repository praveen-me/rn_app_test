import {View} from 'react-native';
import React from 'react';
import Text from 'viamagnus/src/components/Text';
import InfoIcon from 'viamagnus/src/assets/svg/InfoIcon';
import ClockIcon from 'viamagnus/src/assets/svg/ClockIcon';
import commonStyles from 'viamagnus/src/styles/common';
import styles from 'viamagnus/src/styles/containers/Home';

import theme from 'viamagnus/src/styles/theme';
import {Spacing} from 'viamagnus/src/styles/metrics';
import BitCoinIcon from 'viamagnus/src/assets/svg/BitcoinIcon';

export default function CoinInflation() {
  return (
    <View>
      <View style={styles.topInfoContainer}>
        <View style={[commonStyles.row, commonStyles.justifyBetween]}>
          <View style={[commonStyles.row]}>
            <Text.H4 styles={[styles.infoText, styles.coinInfoHeadText]}>
              Under or Over
            </Text.H4>
            <InfoIcon />
          </View>
          <View style={[commonStyles.row]}>
            <Text.H4 styles={[styles.infoText, styles.coinLightInfoTitle]}>
              Starting In
            </Text.H4>
            <View style={{paddingHorizontal: Spacing.verySmall}}>
              <ClockIcon />
            </View>
            <Text.H4 styles={[styles.infoText, {fontWeight: '500'}]}>
              03:23:12
            </Text.H4>
          </View>
        </View>

        <View style={styles.coinBottomInfo}>
          <Text.H3 styles={[styles.infoText]}>
            Bitcoin price will be under
          </Text.H3>
          <Text.H3 styles={{color: theme.colors.white}}>
            $24,524 at 7 a ET on 22nd Jan’21
          </Text.H3>
        </View>
      </View>
      <View style={styles.bitcoinIconContainer}>
        <BitCoinIcon />
      </View>
    </View>
  );
}
