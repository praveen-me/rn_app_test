import {View} from 'react-native';
import React, {ReactNode} from 'react';
import Text from 'viamagnus/src/components/Text';
import commonStyles from 'viamagnus/src/styles/common';
import theme from 'viamagnus/src/styles/theme';

interface IHeaderProps {
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  title: string;
}

export default function Header(props: IHeaderProps) {
  return (
    <View style={[commonStyles.row, commonStyles.justifyBetween]}>
      {props.leftIcon && props.leftIcon}
      <Text.H3 styles={{color: theme.colors.secondary}}>{props.title}</Text.H3>
      {props.rightIcon && props.rightIcon}
    </View>
  );
}
