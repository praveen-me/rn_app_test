import styles from 'viamagnus/src/styles/components/AppText';
import React, {ReactNode} from 'react';
import {Text, TextStyle} from 'react-native';

interface IH2Props {
  children: ReactNode;
  styles?: TextStyle;
  center?: boolean;
}

export default function H2(props: IH2Props) {
  return (
    <Text
      style={[
        styles.h2,
        props.styles,
        {textAlign: props.center ? 'center' : 'left'},
      ]}>
      {props.children}
    </Text>
  );
}
