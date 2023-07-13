import {Dimensions, PixelRatio} from 'react-native';
import {moderateScaleWithRatio} from 'viamagnus/src/styles/moderateScaleWithRatio';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

const wp = (widthPercent: string): number => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const hp = (heightPercent: string): number => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const Typo = {
  small: moderateScaleWithRatio(12),
  medium: moderateScaleWithRatio(14),
  big: moderateScaleWithRatio(20),
  veryBig: moderateScaleWithRatio(30),
};

// const SpacingVertical = {
//   verySmall: hp('0.7%'),
//   small: hp('1.2%'),
//   medium: hp('2.4%'),
//   big: hp('3.6%'),
// };

const Spacing = {
  superSmall: moderateScaleWithRatio(5),
  verySmall: moderateScaleWithRatio(10),
  small: moderateScaleWithRatio(15),
  medium: moderateScaleWithRatio(20),
  big: moderateScaleWithRatio(30),
};

const BorderRadius = {
  small: wp('1.5%'),
  medium: wp('3%'),
  big: wp('10%'),
};

export const isSmallDevice = screenHeight < 750;

export {wp, hp, Typo, Spacing, BorderRadius};
