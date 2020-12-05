import React, { memo } from 'react';
import css from './style';
import colors from '../../../style/colors';

type SquareProps = {
  checked: boolean
  value: number
  onClick: (value: number) => void
};

const Square: React.FC<SquareProps> = ({
  checked,
  onClick,
  value,
}) => (
  <>
    <div
      aria-label={`Botão ${value}`}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick(value)}
      onClick={() => onClick(value)}
      css={css.wrapper({
        squareColor: colors.primary,
      })}
    >
      <div className={['square', checked && 'checked'].join(' ')} />
    </div>
  </>
);

export default memo(Square);
