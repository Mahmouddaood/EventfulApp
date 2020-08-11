import { StyleSheet, I18nManager, Platform } from 'react-native';
import theme from './colors';

const isRtl = I18nManager.isRTL;

export default StyleSheet.create({
  flexStyle: {
    flex: 1
  },
  verticalCenteredFlex: {
    justifyContent: 'center'
  },
  selfCentered: {
    alignSelf: 'center'
  },
  horizontalCenteredFlex: {
    alignItems: 'center'
  },
  spaceBetweenItems: {
    justifyContent: 'space-between'
  },
  wrapedFlex: {
    flexWrap: 'wrap'
  },
  noWrapStyle: {
    flexWrap: 'nowrap'
  },
  rowStyle: {
    flexDirection: isRtl ? 'row-reverse' : 'row'
  },
  flexStartStyle: {
    justifyContent: 'flex-start'
  },
  selfStart: {
    alignSelf: 'flex-start'
  },
  flexEndStyle: {
    justifyContent: 'flex-end'
  },
  selfEnd: {
    alignSelf: 'flex-end'
  },
  fullWidth: {
    width: '100%'
  },
  fullHeight: {
    height: '100%'
  },
  shadow: {
    backgroundColor: theme.white,
    shadowColor: Platform.select({
      ios: 'rgba(114, 124, 142, 0.4)',
      android: '#000'
    }),
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 9,
    shadowOpacity: 0.5
  },
  secondShadow: {
    shadowColor: theme.whitee7,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 8,
    shadowOpacity: 1
  },
  backgroundColor: {
    backgroundColor: theme.background
  },
  rtlRowStyle: {
    flexDirection: "row-reverse"
  }
});
