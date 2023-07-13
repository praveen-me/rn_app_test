import {StyleSheet} from 'react-native';
import {Spacing} from 'viamagnus/src/styles/metrics';
import {moderateScaleWithRatio} from 'viamagnus/src/styles/moderateScaleWithRatio';
import theme from 'viamagnus/src/styles/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.medium,
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  heroInfoContainer: {
    marginVertical: Spacing.big,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    overflow: 'hidden',
  },
  topInfoContainer: {
    padding: Spacing.medium,
    backgroundColor: theme.colors.headColor,
  },
  infoText: {
    color: theme.colors.infoColor,
  },
  coinInfoHeadText: {
    textTransform: 'uppercase',
    fontWeight: '600',
    paddingRight: moderateScaleWithRatio(5),
  },
  coinBottomInfo: {
    marginTop: Spacing.medium,
  },
  coinLightInfoTitle: {
    color: '#B296DC',
    fontWeight: '500',
  },
  bitcoinIconContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
});

export default styles;
