import React from 'react';
import { ViewStyle } from 'react-native';
import {
  FastImageSource,
  ImageStyle
} from 'react-native-fast-image';

export type Source = FastImageSource | string;

export default interface AvatarProps {
  source: Source;
  imageStyle?: ImageStyle | (ImageStyle | any)[] | ViewStyle | ViewStyle[] | any;
  children?: React.ReactNode;
}
