/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRefWithAs } from '@nathsimpson/utils';
import { BoxProps, boxStyles } from './styles';

export const Box = forwardRefWithAs<'div', BoxProps>(
  ({ as: Tag = 'div', ...props }, ref) => {
    const [styles, attrs] = boxStyles(props);
    return <Tag ref={ref} css={styles} {...attrs} />;
  }
);
