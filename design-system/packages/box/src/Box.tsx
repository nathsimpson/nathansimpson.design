import { forwardRefWithAs } from '@nathsimpson/utils';
import { BoxProps, useBoxStyles } from './styles';

export const Box = forwardRefWithAs<'div', BoxProps>(function Box(
  { as: Tag = 'div', ...props },
  ref
) {
  const [styles, attrs] = useBoxStyles(props);
  return <Tag ref={ref} css={styles} {...attrs} />;
});
