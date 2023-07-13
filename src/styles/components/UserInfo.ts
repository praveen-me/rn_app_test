import {StyleSheet} from 'react-native';
import {moderateVerticalScale} from 'react-native-size-matters';
import {Spacing} from 'viamagnus/src/styles/metrics';
import theme from 'viamagnus/src/styles/theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Spacing.big,
  },
  userName: {
    textAlign: 'center',
    paddingTop: Spacing.small,
    paddingBottom: moderateVerticalScale(8),
  },
  userPoints: {
    color: theme.colors.secondary,
    textAlign: 'center',
    paddingBottom: moderateVerticalScale(8),
  },
  userAbout: {
    color: theme.colors.secondary,
  },
});

export default styles;
