import React, { memo } from 'react';
import css from './style';
import Square from './Square';

type BoardInputProps = {
  value: number[];
  onValueChange: (value: number) => void;
};

const squares = [7, 8, 9, 4, 5, 6, 1, 2, 3];

const BoardInput: React.FC<BoardInputProps> = ({
  value,
  onValueChange,
}) => (
  <div css={css.wrapper({
    backgroundColor: 'white',
  })}
  >
    <svg viewBox="0 0 1 1" />
    <div className="board">
      {squares.map((i) => (
        <Square onClick={onValueChange} value={i} key={i} checked={value.some((j) => i === j)} />
      ))}
    </div>
  </div>
);

export default memo(BoardInput);
