import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY, SPACING} from '../../styles/theme-variables';

const WIDTH_SCREEN = Dimensions.get('window').width;
const HEIGHT_SCREEN = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  Background: {
    width: WIDTH_SCREEN,
    height: HEIGHT_SCREEN,
    objectFit: 'cover',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0,
  },
  Wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.black,
    paddingHorizontal: SPACING.medium,
    paddingVertical: SPACING.medium,
  },
  TextWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  Text: {
    color: COLORS.white,
    fontFamily: FONT_FAMILY.pacifico,
  },
  Button: {
    paddingVertical: 20,
    paddingHorizontal: SPACING.large,
    backgroundColor: '#ffff',
    borderRadius: 20,
    width: '100%',
  },
  ButtonText: {
    position: 'relative',
    color: COLORS.gray400,
    fontWeight: '800',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.poppins,
  },
  ButtonIcon: {
    position: 'absolute',
    right: 20,
    top: 18,
    color: COLORS.gray400,
  },
});
