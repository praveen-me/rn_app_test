import {StyleSheet} from 'react-native';
import {Spacing} from 'viamagnus/src/styles/metrics';
import {moderateScaleWithRatio} from 'viamagnus/src/styles/moderateScaleWithRatio';
import theme from 'viamagnus/src/styles/theme';

const styles = StyleSheet.create({
  tabContainer: {
    width: '50%',
    height: 60,
  },
  selectedTab: {
    fontWeight: '600',
    color: theme.colors.headColor,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.headColor,
  },
  tab: {
    color: theme.colors.secondary,
    paddingVertical: moderateScaleWithRatio(20),
    textAlign: 'center',
  },
  cardContainer: {
    padding: moderateScaleWithRatio(20),
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    borderRadius: 5,
    backgroundColor: theme.colors.white,
  },
  infoContainer: {
    marginLeft: Spacing.medium,

    flexShrink: 1,
    justifyContent: 'space-between',

    flex: 1,
  },
  infoTitle: {
    fontWeight: '600',
    paddingBottom: moderateScaleWithRatio(8),
  },
  infoSubTitle: {
    fontWeight: '500',
    color: theme.colors.secondary,
  },
  listContainer: {
    padding: Spacing.medium,
    backgroundColor: theme.colors.secondaryBg,
  },
  separator: {
    height: 16,
    backgroundColor: theme.colors.secondaryBg,
  },
});

export default styles;
