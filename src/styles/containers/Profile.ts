import {StyleSheet} from 'react-native';
import {moderateVerticalScale} from 'react-native-size-matters';
import {Spacing} from 'viamagnus/src/styles/metrics';

import {moderateScaleWithRatio} from 'viamagnus/src/styles/moderateScaleWithRatio';
import theme from 'viamagnus/src/styles/theme';

const styles = StyleSheet.create({
  logoutContainer: {
    marginTop: moderateScaleWithRatio(20),
  },
  logoutText: {
    paddingLeft: moderateScaleWithRatio(5),
    color: theme.colors.secondary,
  },
  statsContainer: {
    padding: moderateVerticalScale(20),
    borderWidth: 2,
    borderColor: theme.colors.stroke,
    borderRadius: 5,
    marginTop: moderateScaleWithRatio(40),
    marginBottom: moderateScaleWithRatio(28),
  },
  statsValueContainer: {
    paddingTop: moderateScaleWithRatio(14),
  },
  statsValue: {
    fontWeight: '700',
    paddingLeft: Spacing.small,
  },
  statsHeader: {
    color: theme.colors.secondary,
    fontWeight: '600',
  },
  divider: {
    height: 4,
    backgroundColor: theme.colors.secondaryBg,
  },
});

export default styles;
