import { css } from '@emotion/core';

type StyleProp = {
  backgroundColor: string;
};

const wrapper = ({ backgroundColor }: StyleProp) => css`
  display: grid;
  max-width: 400px;

  > * {
    grid-area: 1 / 1 / 2 / 2;
  }

  .board {
    width: 100%;
    height: 100%;
    background-color: ${backgroundColor};
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    padding: 2.5%;
    box-sizing: border-box;
  }
`;

export default {
  wrapper,
};
