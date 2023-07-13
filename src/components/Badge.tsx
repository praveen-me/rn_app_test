import {View} from 'react-native';
import React from 'react';
import CardImage from 'viamagnus/src/assets/svg/CardImage';
import styles from 'viamagnus/src/styles/components/UserTabs';
import commonStyles from 'viamagnus/src/styles/common';
import Text from 'viamagnus/src/components/Text';

interface IBadgeProps {
  badge: {
    title: string;
    desc: string;
  };
}

export default function Badge(props: IBadgeProps) {
  return (
    <View style={[styles.cardContainer, commonStyles.row]}>
      <CardImage />
      <View style={styles.infoContainer}>
        <Text.H3 styles={styles.infoTitle}>{props.badge.title}</Text.H3>
        <Text.H3 styles={[styles.infoSubTitle, {flexShrink: 1}]}>
          {props.badge.desc}
        </Text.H3>
      </View>
    </View>
  );
}
