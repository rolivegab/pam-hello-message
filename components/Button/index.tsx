import React, { memo } from 'react';
import style, { StyleProps } from './style';

type ButtonProps = {
  colors: StyleProps
  onClick?: () => void
  children: React.ReactNode
  disabled?: boolean
};

const Button: React.FC<ButtonProps> = ({
  colors,
  children,
  onClick,
  disabled,
}) => (
  <button
    disabled={disabled}
    type="button"
    css={style(colors)}
    onClick={onClick}
  >
    {children}
  </button>
);

export default memo(Button);
