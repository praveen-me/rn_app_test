import styles from 'viamagnus/src/styles/components/AppText';
import React, {ReactNode} from 'react';
import {Text, TextStyle} from 'react-native';

interface IH4Props {
  children: ReactNode;
  styles?: TextStyle[] | TextStyle;
}

export default function H4(props: IH4Props) {
  return (
    <Text style={[styles.h4, props.styles]} {...props}>
      {props.children}
    </Text>
  );
}
