/**
 * @flow
 * @format
 */
import {Typo} from 'audvice/src/styles/metrics';

const theme = {
  colors: {
    // general theme colors
    primary: '#ffffff',
    brand: '#F40047',
    brandDark: '#d8004d',
    accent: '#7cdbd5',
    accentLight: '#9aede8',
    error: '#c20000',

    // domain specific colors
    text: '#424242',
    disabledText: '#9A9A9A',
    bottomTabInactive: '#A8A8A8',
    bottomTabBorder: '#D8D8D8',
    placeholderText: '#D8D8D8',
    screenBackground: '#f6f6f6',
    disabledButton: '#9A9A9A',
    switchButtonFalse: '#D8D8D8',
    dataListDivider: '#f2f2f2',
    listMenuButton: '#b7b7b7',
    tagBackground: '#DDDDDD',
    addTagIcon: '#DDDDDD',
    androidDialogInputBottomBorder: '#DDDDDD',
    playlistDescription: '#9A9A9A',
    recorderTimescale: '#9A9A9A',
    recorderBorder: '#f2f2f2',
    selectSheetGrab: '#DDDDDD',
    playerMinimumTrackTint: '#424242',
    playerMaximumTrackTint: '#D8D8D8',
    categoryLabel: '#ffffff',
    thumbnailPlaceholderBackground: '#cccccc',
    pageIndicatorInactive: '#DDDDDD',
    selectionCircleBorder: '#DDDDDD',

    // recorder-colors
    plotLineColor: '#E2555F', // 226, 85, 95 plotLine
    timeTextColor: '#9A9A9A', // sRGB: 154, 154, 154
    waveBackgroundLeftColor: '#F5F4F7', // sRGB: 245, 244, 247
    waveBackgroundRightColor: '#FBFCFE',
    nowLineColor: '#E2555F',
    cutPlotLineColor: '#3E3E3E', // sRGB: 62, 62, 62 : between dark-gray and black
    //cutPlotLineColor: '#F39C12', // for testing sandy brown
    cutSelectionOverlayColor: '#DBE8FD', // lightblue
    cutFrameColor: '#0064DD', // sRGB: 0, 100, 221 audv blue
    cutSpeakerCursorColor: '#E2555F', // 226, 85, 95 plotLine
    cutAudioBackgroundColor: '#F5F4F7', // sRGB: 245, 244, 247
    cutArrowColor: '#FFFFFF', // sRGB: 255, 255, 255 (white)

    // constant colors - independent of theming
    gray: '#DDDDDD',
    darkGray: '#666666',
    lightGray: '#9A9A9A',
    white: '#ffffff',

    header: '#3E3E3E',
    actions: '#2962D5',
    link: '#0064DD',
    primaryElBg: '#F5F4F7',
    orange: '#FF5C5C',
    superLightGrey: '#EEEEEE',
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
