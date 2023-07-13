import {Spacing} from 'viamagnus/src/styles/metrics';
import theme from 'viamagnus/src/styles/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  h1: {
    fontSize: theme.fonts.sizes.xlarge,
    fontFamily: theme.fonts.families.primary.bold,
  },
  h2: {
    fontSize: theme.fonts.sizes.large,
    fontFamily: theme.fonts.families.primary.bold,
  },
  h3: {
    fontSize: theme.fonts.sizes.medium,
    fontFamily: theme.fonts.families.primary.regular,
    lineHeight: Spacing.medium,
  },
  h4: {
    fontSize: theme.fonts.sizes.small,
    fontFamily: theme.fonts.families.primary.regular,
  },
});

export default styles;
