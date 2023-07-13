/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'react-native';
import RootNavigator from 'viamagnus/src/lib/rootNavigation';
import commonStyles from 'viamagnus/src/styles/common';

function App(): JSX.Element {
  return (
    <SafeAreaView style={commonStyles.flex1}>
      <RootNavigator />
    </SafeAreaView>
  );
}

export default App;
