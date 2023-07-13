import styles from 'viamagnus/src/styles/components/AppText';
import React, {ReactNode} from 'react';
import {Text, TextStyle} from 'react-native';

interface IH1Props {
  children: ReactNode;
  styles?: TextStyle;
}

export default function H1({children, ...rest}: IH1Props) {
  return <Text style={[styles.h1, rest.styles]}>{children}</Text>;
}
