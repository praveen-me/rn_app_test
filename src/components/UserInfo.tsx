import {View} from 'react-native';
import React from 'react';
import AppAvatar from 'viamagnus/src/components/AppAvatar';
import styles from 'viamagnus/src/styles/components/UserInfo';
import Text from 'viamagnus/src/components/Text';

export default function UserInfo() {
  return (
    <View style={styles.container}>
      <AppAvatar />

      <Text.H3 styles={styles.userName}>Jina Simons</Text.H3>
      <Text.H4 styles={[styles.userPoints]}>6000 Pts</Text.H4>

      <Text.H3 styles={styles.userAbout}>
        I’m a software developer that has been in the crypto space since 2012.
        And I’ve seen it grow and falter over a period of time. Really happy to
        be here!
      </Text.H3>
    </View>
  );
}
