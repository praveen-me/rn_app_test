import {Dimensions, StyleSheet} from 'react-native';
import {Spacing, screenWidth} from 'viamagnus/src/styles/metrics';
import {moderateScaleWithRatio} from 'viamagnus/src/styles/moderateScaleWithRatio';
import theme from 'viamagnus/src/styles/theme';

const styles = StyleSheet.create({
  predictionContainer: {
    paddingVertical: Spacing.medium,
    paddingHorizontal: Spacing.big,
  },
  optionTitle: {
    color: theme.colors.lightTextColor,
    textTransform: 'uppercase',
    fontSize: moderateScaleWithRatio(11),
  },
  optionValue: {
    marginTop: moderateScaleWithRatio(8),
    fontWeight: '600',
  },
  btn: {
    width: screenWidth * 0.3,

    height: 40,
    borderRadius: 45,
  },
  underBtn: {
    backgroundColor: '#452C55',
  },
  overBtn: {
    backgroundColor: theme.colors.headColor,
  },
  bottomContainer: {
    paddingTop: moderateScaleWithRatio(22),
  },
  btnContainer: {
    paddingTop: Spacing.small,
  },
  whatUrPred: {
    fontWeight: '500',
    color: theme.colors.secondary,
  },
  btnText: {
    fontWeight: '500',
    color: theme.colors.white,
    paddingLeft: moderateScaleWithRatio(5),
  },
});

export default styles;
