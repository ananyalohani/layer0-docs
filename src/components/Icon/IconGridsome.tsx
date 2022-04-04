import * as React from 'react';
import cn from 'classnames';

export const IconGridsome = React.memo<JSX.IntrinsicElements['svg']>(
  ({className}) => (
    <svg className={cn('inline', className)} viewBox="0 0 48 48" fill="none">
      <path
        d="M43.395 19.862c2.308-.11 4.35 1.68 4.55 3.99.863 11.174-9.364 23.692-23.775 24.092C12.025 48.244.013 38.521.013 23.82c0-2.317 1.915-4.195 4.225-4.195a4.19 4.19 0 014.184 4.195c0 9.67 7.776 15.928 15.542 15.737 9.56-.266 15.776-8.544 15.453-15.303a4.19 4.19 0 013.978-4.392z"
        fill="url(#gridsome_svg__paint0_linear)"></path>
      <path
        d="M32.944 24.145c0-2.372 1.935-4.295 4.321-4.295h6.298c2.387 0 4.382 1.923 4.382 4.295s-1.995 4.295-4.382 4.295h-6.298c-2.386 0-4.321-1.923-4.321-4.295zm-13.215.006a4.297 4.297 0 014.291-4.301 4.297 4.297 0 014.292 4.301 4.297 4.297 0 01-4.292 4.301 4.297 4.297 0 01-4.291-4.301z"
        fill="#00A672"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.193 4.055a4.19 4.19 0 01-4.006 4.365c-9.966.415-16.05 8.248-15.753 15.685.092 2.315-1.668 4.267-3.976 4.36-2.309.092-4.34-1.777-4.431-4.092C-.456 12.253 9.635.273 23.84.037a4.188 4.188 0 014.353 4.018z"
        fill="#00A672"></path>
      <defs>
        <linearGradient
          id="gridsome_svg__paint0_linear"
          x1="24.005"
          y1="19.625"
          x2="24.005"
          y2="47.951"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#00583E"></stop>
          <stop offset="1" stopColor="#00835C"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
);

export const IconGridsomeDark = React.memo<JSX.IntrinsicElements['svg']>(
  ({className}) => (
    <svg className={cn('inline', className)} viewBox="0 0 48 48" fill="none">
      <path
        d="M43.395 19.862c2.308-.11 4.35 1.68 4.55 3.99.863 11.174-9.364 23.692-23.775 24.092C12.025 48.244.013 38.521.013 23.82c0-2.317 1.915-4.195 4.225-4.195a4.19 4.19 0 014.184 4.195c0 9.67 7.776 15.928 15.542 15.737 9.56-.266 15.776-8.544 15.453-15.303a4.19 4.19 0 013.978-4.392z"
        fill="url(#gridsome_svg__paint1_linear)"></path>
      <path
        d="M32.944 24.145c0-2.372 1.935-4.295 4.321-4.295h6.298c2.387 0 4.382 1.923 4.382 4.295s-1.995 4.295-4.382 4.295h-6.298c-2.386 0-4.321-1.923-4.321-4.295zm-13.215.006a4.297 4.297 0 014.291-4.301 4.297 4.297 0 014.292 4.301 4.297 4.297 0 01-4.292 4.301 4.297 4.297 0 01-4.291-4.301z"
        fill="#00A672"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.193 4.055a4.19 4.19 0 01-4.006 4.365c-9.966.415-16.05 8.248-15.753 15.685.092 2.315-1.668 4.267-3.976 4.36-2.309.092-4.34-1.777-4.431-4.092C-.456 12.253 9.635.273 23.84.037a4.188 4.188 0 014.353 4.018z"
        fill="#00A672"></path>
      <defs>
        <linearGradient
          id="gridsome_svg__paint1_linear"
          x1="24.005"
          y1="19.625"
          x2="24.005"
          y2="47.951"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#00583E"></stop>
          <stop offset="1" stopColor="#00835C"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
);

IconGridsome.displayName = 'IconGridsome';
IconGridsomeDark.displayName = 'IconGridsomeDark';
