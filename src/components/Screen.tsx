import React, {ReactNode} from 'react';
import {ScrollView, ScrollViewProps, ViewStyle} from 'react-native';

import styles from 'viamagnus/src/styles/components/Screen';

interface IScreenOwnProps {
  children: ReactNode;
  scrollEnabled?: boolean;
  styles?: ViewStyle[] | ViewStyle;
}

type IScreenProps = IScreenOwnProps &
  Omit<ScrollViewProps, keyof IScreenOwnProps>;

export default function Screen(props: IScreenProps) {
  const {scrollEnabled, children, styles: propsStyles, ...rest} = props;

  return (
    <ScrollView
      contentContainerStyle={[styles.container, propsStyles]}
      scrollEnabled={scrollEnabled}
      showsVerticalScrollIndicator={false}
      // bounces={false}
      {...rest}>
      {children}
    </ScrollView>
  );
}
