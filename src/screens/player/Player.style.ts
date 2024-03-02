import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY, SPACING} from '../../styles/theme-variables';

const WIDTH_SCREEN = Dimensions.get('window').width;
const HEIGHT_SCREEN = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  Wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.blue300,
    paddingHorizontal: SPACING.medium,
    paddingVertical: SPACING.medium,
    position: 'relative',
  },
  TextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 1,
    gap: 0,
  },
  Text: {
    color: COLORS.white,
    fontFamily: FONT_FAMILY.pacifico,
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

export const stylePlayer = StyleSheet.create({
  PlayerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PlayerImage: {
    width: WIDTH_SCREEN,
    height: WIDTH_SCREEN,
    maxWidth: 307,
    maxHeight: 307,
    borderRadius: 1000,
    backgroundColor: COLORS.gray400,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  PlayerText: {
    fontSize: 20,
    fontWeight: '300',
    color: COLORS.gray400,
    textAlign: 'center',
  },
});

export const styleActions = StyleSheet.create({
  Blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 20,
    zIndex: 0,
  },

  Wrapper: {
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: SPACING.medium,
    paddingHorizontal: SPACING.medium,
    borderRadius: 20,
    position: 'relative',
    zIndex: 1,
  },
  Title: {
    fontSize: 25,
    fontWeight: '800',
    color: COLORS.white,
    fontFamily: FONT_FAMILY.pacifico,
  },
  Author: {
    fontSize: 16,
    fontWeight: '300',
    color: COLORS.white,
    marginTop: 3,
    fontFamily: FONT_FAMILY.poppins,
  },

  WaveWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 40,
    position: 'relative',
  },
  WaveProgress: {
    width: '110%',
    height: 2,
  },
  WaveTimer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  ButtonWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
    marginTop: 20,
  },
  ButtonMainAction: {
    width: 70,
    height: 70,
    borderRadius: 10000,
    backgroundColor: COLORS.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonAction: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    position: 'absolute',
    left: '70%',
  },
});
