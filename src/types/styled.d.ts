import 'styled-components';
import { RuleSet } from 'styled-components';

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
    mixin: {
      flexCenter: () => RuleSet<object>;
      flexBox: ({ direction, align, justify }) => RuleSet<object>;
      inlineFlexBox: ({ direction }) => RuleSet<object>;
    };
  }
}
