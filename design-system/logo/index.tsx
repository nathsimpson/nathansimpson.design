/** @jsx jsx */
import { jsx } from '@emotion/core';
import { colors } from '../theme';

const sizes = {
  small: 32,
  medium: 50
} as const;

const hoverStyles = {
  '&:hover g .outline': {
    fill: colors.brandSecondary
  },
  '&:hover g .solid': {
    // opacity: 1
  }
};

export const Logo = ({
  size = 'medium',
  isInteractive
}: {
  size: keyof typeof sizes;
  isInteractive?: boolean;
}) => (
  <svg
    viewBox="0 0 158.6 102.8"
    css={{
      height: sizes[size],
      width: 'auto',
      'g .outline': {
        fill: colors.brand
      },
      'g .solid': {
        fill: colors.brand,
        opacity: 0,
        transition: 'opacity 0.5s'
      },
      ...Object(isInteractive ? hoverStyles : {})
    }}
  >
    <g>
      <path
        className="outline"
        d="M7,51.1L34.1,6h24.4l-23,38.8l0,0l-3.8,6.3L59,96.5H34.3L7,51.1z M53.1,26.8L65.5,6h0.4l39.2,69.4L92.5,96.5
      		L53.1,26.8z M121.9,58.7l4.6-7.6L99.3,6h24.8l27.1,45.1L124,96.5H99.5L121.9,58.7z M88.8,0l5.4,9l25.3,42.1l-2.4,3.9l0,0l-0.3,0.5
      		l-8.3,13.8L71,3l-1.7-3H30.7L29,2.9L1.8,48L0,51.1l1.8,3.1l27.3,45.4l1.7,2.9h3.4H59h10.5l-5.4-9L38.7,51.1l11-18.3l37.6,66.6
      		l1.7,3h3.5H124h3.4l1.7-2.9l27.3-45.4l1.8-3.1l-1.8-3.1l-27.2-45L127.5,0H88.8z"
      />
    </g>
    <g>
      <polygon
        className="solid"
        points="59.1,96.5 34.3,96.5 7,51.1 34.1,6 58.5,6 35.5,44.8 35.6,44.8 31.8,51.1"
      />
      <polygon
        className="solid"
        points="53.1,26.8 65.5,6 65.8,6 105.1,75.4 92.5,96.5"
      />
      <polygon
        className="solid"
        points="124,96.5 99.5,96.5 121.9,58.7 126.5,51.1 99.3,6 124.1,6 151.3,51.1"
      />
    </g>
  </svg>
);
