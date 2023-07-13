import {StyleSheet} from 'react-native';

import theme from 'viamagnus/src/styles/theme';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  avatarImage: {
    height: 75,
    width: 75,
    borderRadius: 75 / 2,
  },
  editWrapper: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    position: 'absolute',
    bottom: 0,
    right: -5,
  },
});

export default styles;
