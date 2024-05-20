import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY, SPACING} from '../../styles/theme-variables';

const WIDTH_SCREEN = Dimensions.get('window').width;
const HEIGHT_SCREEN = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  Wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    gap: 30,
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.black,
    paddingVertical: SPACING.medium,
    margin: 0,
    position: 'relative',
  },
  Logo: {
    position: 'absolute',
    width: 150,
    height: 60,
    objectFit: 'contain',
    left: '50%',
    top: 40,
    zIndex: 2,
    transform: [{translateX: -75}],
  },
  Background: {
    width: WIDTH_SCREEN,
    height: HEIGHT_SCREEN,
    objectFit: 'cover',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0,
  },
});

export const styleActions = StyleSheet.create({
  Wrapper: {
    width: '90%',
    maxWidth: 400,
    height: 'auto',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    position: 'relative',
    zIndex: 1,
  },
  Background: {
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  ButtonWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 2,
  },
  ButtonMainAction: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    transform: [{translateX: -45}],
    position: 'absolute',
    zIndex: 0,
    fontSize: 20,
    color: COLORS.gray400,
    fontFamily: FONT_FAMILY.jakarta,
    letterSpacing: 2,
  },
});
