import { css } from '@emotion/core';

export type StyleProps = {
  background: string
  backgroundHover: string
  color: string
  colorHover: string
  border: string
  borderHover: string
};

export default ({
  background,
  backgroundHover,
  border,
  borderHover,
  color,
  colorHover,
}: StyleProps) => css`
  width: 100%;
  margin-top: 20px;
  border-radius: 5px;
  padding: 7px;
  border: 3px solid ${border};
  box-sizing: border-box;
  background-color: ${background};
  font-weight: bold;
  cursor: pointer;
  color: ${color};

  &:hover {
    background-color: ${backgroundHover};
    border-color: ${borderHover};
    color: ${colorHover};
  }
`;
