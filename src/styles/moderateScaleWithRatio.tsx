import {PixelRatio} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const ratio = PixelRatio.getFontScale();

export function moderateScaleWithRatio(scale: number): number {
  return moderateScale(scale, ratio);
}
