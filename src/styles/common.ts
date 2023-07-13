import {Platform, StyleSheet} from 'react-native';
import {isSmallDevice, Spacing} from 'viamagnus/src/styles/metrics';
import theme from './theme';

const commonStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  headerWrapper: {
    marginHorizontal: Spacing.big,
    marginBottom: Spacing.medium,
    flex: 1,
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom:
      Platform.OS === 'android' || isSmallDevice ? Spacing.verySmall : 0,
  },

  containerNoMargin: {
    marginHorizontal: 0,
    backgroundColor: '#fff',
  },
  divider: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.bottomTabBorder,
    marginHorizontal: Spacing.big,
    marginVertical: Spacing.medium,
  },
  pB0: {
    paddingBottom: 0,
  },
  mH0: {
    marginHorizontal: 0,
  },
});

export default commonStyles;
