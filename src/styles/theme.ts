import {Typo} from 'viamagnus/src/styles/metrics';

const theme = {
  colors: {
    // general theme colors
    primary: '#ffffff',
    secondary: '#727682',
    stroke: '#EEEAF3',
    secondaryBg: '#F3F2F7',
    white: '#ffffff',
    headColor: '#6231AD',
  },
  fonts: {
    families: {
      primary: {
        extraBold: 'Nexa-ExtraBold',
        bold: 'Nexa-Bold',
        regular: 'Nexa-Regular',
      },
    },
    sizes: {
      small: Typo.small,
      medium: Typo.medium,
      large: Typo.big,
      xlarge: Typo.veryBig,
    },
  },
};

// Style definitions
// theme.styles = {};

// theme.styles.navigationHeader = {
//   ...Platform.select({
//     android: {
//       paddingTop: StatusBar.currentHeight,
//       height: moderateScale(45) + StatusBar.currentHeight,
//     },
//   }),
// };

// theme.styles.transparentNavigationHeader = {
//   ...theme.styles.navigationHeader,
//   backgroundColor: theme.colors.screenBackground,
//   borderBottomWidth: 0,
//   elevation: 0,
//   shadowOpacity: 0,
// };

export default theme;
