import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      gray: string;
      yellow: string;
      blue: string;
      red: string;
    };
  }
}
