import { css } from "styled-components";

interface MixinProps {
  direction?: string;
  align?: string;
  justify?: string;
}

const mixin = {
  flexBox: ({
    direction = "row",
    align = "center",
    justify = "center",
  }: MixinProps) => css`
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
  inlineFlexBox: ({
    direction = "row",
    align = "center",
    justify = "center",
  }: MixinProps) => css`
    display: inline-flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
  flexCenter: () => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export default mixin;
