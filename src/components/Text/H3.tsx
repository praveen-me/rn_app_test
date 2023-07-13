import styles from 'viamagnus/src/styles/components/AppText';
import React, {ReactNode} from 'react';
import {Text, TextProps, TextStyle} from 'react-native';

interface IH3Props {
  children: ReactNode;
  styles?: TextStyle[] | TextStyle;
  ellipsizeMode?: keyof TextProps['ellipsizeMode'];
}

export default function H3(props: IH3Props) {
  return (
    <Text style={[styles.h3, props.styles]} {...props}>
      {props.children}
    </Text>
  );
}
