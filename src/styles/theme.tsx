import mixin from './mixin';
import { DefaultTheme } from 'styled-components';

const colors = {
  white: '#FCFCFC',
  black: '#020202',
  gray: '#DBDBDB',
  darkGray: '#999999',
  yellow: '#FAED46',
  blue: '#6A7CB7',
  red: '#FF0000',
};

const theme: DefaultTheme = { mixin, colors };

export default theme;
