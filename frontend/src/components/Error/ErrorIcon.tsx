import React, { FC } from 'react';

export interface ErrorIconProps {}

export const ErrorIcon: FC<ErrorIconProps> = () => {
  return (
    <div className='inline-svg error-icon ember-view'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='164'
        height='164'
        viewBox='0 0 164 164'
      >
        <g fill='#FFF' fillRule='evenodd'>
          <path d='M82 164c45.287 0 82-36.713 82-82S127.287 0 82 0 0 36.713 0 82s36.713 82 82 82zm0-7c41.421 0 75-33.579 75-75S123.421 7 82 7 7 40.579 7 82s33.579 75 75 75z'></path>
          <rect x='77' y='40' width='8' height='64' rx='4'></rect>
          <rect x='77' y='115.5' width='8' height='8' rx='8'></rect>
        </g>
      </svg>
    </div>
  );
};

export default ErrorIcon;
