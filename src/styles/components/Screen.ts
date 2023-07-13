import {Platform, StyleSheet} from 'react-native';
import {Spacing} from '../metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: Spacing.big,
    paddingTop: Platform.OS === 'android' ? Spacing.verySmall : 0,
  },
});

export default styles;
