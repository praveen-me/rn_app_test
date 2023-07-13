import {StyleSheet} from 'react-native';
import {Spacing} from '../metrics';
import theme from 'viamagnus/src/styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: Spacing.verySmall,
    backgroundColor: theme.colors.primary,
  },
});

export default styles;
