import React from 'react';
import { css } from '@emotion/core';
import colors from '../../style/colors';

type SpinnerProps = {
  color?: string;
  size?: number;
};

const Spinner: React.FC<SpinnerProps> = ({ color = colors.primary, size = 3 }) => (
  <div
    css={css`
      display: inline-block;
      position: relative;
      width: ${size * 10}px;
      height: ${size * 10}px;
      transform: rotate(45deg);
      transform-origin: ${size * 5}px ${size * 5}px;

      div {
        top: ${size * 4}px;
        left: ${size * 4}px;
        position: absolute;
        width: ${size * 4}px;
        height: ${size * 4}px;
        background: ${color};
        animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      div:after,
      div:before {
        content: " ";
        position: absolute;
        display: block;
        width: ${size * 4}px;
        height: ${size * 4}px;
        background: ${color};
      }

      div:before {
        left: -${size * 3}px;
        border-radius: 50% 0 0 50%;
      }

      div:after {
        top: -${size * 3}px;
        border-radius: 50% 50% 0 0;
      }

      @keyframes lds-heart {
        0% {
          transform: scale(0.95);
        }
        5% {
          transform: scale(1.1);
        }
        39% {
          transform: scale(0.85);
        }
        45% {
          transform: scale(1);
        }
        60% {
          transform: scale(0.95);
        }
        100% {
          transform: scale(0.9);
        }
      }
    `}
  >
    <div />
  </div>
);

export default Spinner;
