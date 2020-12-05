import { css } from '@emotion/core';

type StyleProps = {
  squareColor: string
};

const wrapper = ({ squareColor }: StyleProps) => css`
  width: calc(100%/3 - 5%);
  height: calc(100%/3 - 5%);
  border: 3px solid ${squareColor};
  border-radius: 5px;
  margin: 2.5%;
  box-sizing: border-box;

  .square {
    width: 100%;
    height: 100%;
    clip-path: circle(0% at center);
    background-color: ${squareColor};
    transition: clip-path .25s ease-out;

    &.checked {
      clip-path: circle(100% at center);
    }
  }
`;

export default {
  wrapper,
};
