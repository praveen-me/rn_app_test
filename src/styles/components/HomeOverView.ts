import {StyleSheet} from 'react-native';
import {Spacing} from 'viamagnus/src/styles/metrics';
import {moderateScaleWithRatio} from 'viamagnus/src/styles/moderateScaleWithRatio';
import theme from 'viamagnus/src/styles/theme';

const styles = StyleSheet.create({
  container: {
    paddingVertical: Spacing.medium,
    paddingHorizontal: Spacing.big,
    backgroundColor: '#F6F3FA',
  },
  highlightedText: {
    fontWeight: '600',
    color: theme.colors.secondary,
    paddingLeft: moderateScaleWithRatio(5),
  },
  progressBarWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
    flex: 1,
    marginVertical: Spacing.small,
  },
  progressBar: {
    height: 10,
  },
  progressLeft: {
    backgroundColor: '#FE4190',
  },
  progressRight: {
    backgroundColor: '#2DABAD',
  },
  underProgressText: {
    fontWeight: '500',
    color: '#B5C0C8',
  },
});

export default styles;
