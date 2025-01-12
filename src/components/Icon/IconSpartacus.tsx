import cn from 'classnames';
import * as React from 'react';

export const IconSpartacus = React.memo<JSX.IntrinsicElements['svg']>(
  ({className}) => (
    <svg className={cn('inline', className)} viewBox="0 0 400 400">
      <path
        d="M183.3 12.5c-12.9 3.6-26.8 13.3-36.7 25.5-12.8 15.9-26.7 45.8-31.6 68.2l-1.3 5.8H94.3c-10.6 0-19.3.3-19.3.6 0 .7-13.3 94.6-15 105.9-1.2 8.1-4.6 31.6-6.1 42.5-2.8 20.5-11.9 85.3-12.8 91-.6 3.6-1.3 8.4-1.6 10.7l-.7 4.3h105.9l4.8-12.3c2.6-6.7 6.5-16.3 8.5-21.2 2.1-5 5.9-14.4 8.5-21 2.6-6.6 5.3-13.4 6-15 .7-1.7 4.9-12 9.3-23l8-20-28.5-.3c-15.6-.1-28.3-.6-28.1-1 .2-.4 4.7-9.5 10-20.2 9.5-19.4 43.1-87.6 53.4-108.5 3-6.1 5.4-11.3 5.4-11.8 0-.4-17.5-.7-39-.7-37.8 0-39-.1-39-1.9 0-4.1 9.3-30.1 14.6-40.6 6.8-13.8 6.8-13.7 13.9-23.2 7.3-9.8 14.9-16.3 24.5-21.1 7.3-3.6 7.8-3.7 18.6-3.7 10.7 0 11.2.1 18.5 3.7 8.9 4.5 17 11.2 23.2 19.3 14 18.5 21.1 33.6 28.6 61.3l2.8 10.2-15.9 27.8c-8.8 15.2-17 29.5-18.3 31.7-1.2 2.2-8 13.9-14.9 26l-12.6 22 28.5.3c15.7.1 28.5.6 28.5 1s-5.9 8.1-13.1 17.2c-7.1 9.1-21 26.6-30.7 38.9-9.7 12.3-24.9 31.5-33.7 42.5-8.8 11.1-20.2 25.4-25.2 31.9L152 367h207.5l-4.2-29.7c-2.4-16.4-4.9-34.8-5.8-40.8-2.2-16.2-8.2-58.4-10-70.5C335 196 324 116.7 324 114.5V112h-46.5l-1.9-7.8c-2.3-9.4-8.2-26.2-12.6-35.7-12.9-27.9-29.8-46.4-49.5-54.2-7.7-3.1-22.5-4-30.2-1.8z"
        fill="#4472c4"
      />
    </svg>
  )
);

IconSpartacus.displayName = 'IconSpartacus';
