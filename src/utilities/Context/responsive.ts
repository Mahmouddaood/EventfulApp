import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';

const { roundToNearestPixel } = PixelRatio;

const decorateHeights: any = Platform.OS === 'android' ? StatusBar.currentHeight : 0;

export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 54 : 56;

export const { width: windowWidth } = Dimensions.get('window');
export const windowHeight = Dimensions.get('window').height - decorateHeights;

export const { width: screenWidth } = Dimensions.get('screen');
export const screenHeight = Dimensions.get('screen').height - decorateHeights;

const maxWidth = 420;
const maxHeight = 800;

export const aspectRatio = () => windowHeight / windowWidth;

export const responsiveWidth = (w: any) =>
    roundToNearestPixel(Math.min(maxWidth, windowWidth) * (w / 100));

export const responsiveHeight = (h: any) =>
    roundToNearestPixel(Math.min(maxHeight, windowHeight) * (h / 100));


export const moderateScale = (size: number, factor = 0.5) => {
    const rw = Math.min(maxHeight, screenHeight) * (size / 100);
    return roundToNearestPixel(size + (rw - size) * factor);
};

export const responsiveFontSize = (f: number, factor = 0.1) => {
    const rw = Math.min(maxWidth, windowWidth) * (f / 100);

    return roundToNearestPixel(f + (rw - f) * factor);
};
