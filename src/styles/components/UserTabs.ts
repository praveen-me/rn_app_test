import {StyleSheet} from 'react-native';
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
});

export default styles;
