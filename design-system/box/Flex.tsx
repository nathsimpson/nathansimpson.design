import { forwardRefWithAs } from '../utils';

import { Box } from './Box';
import { BoxProps } from './styles';

export type FlexBoxProps = BoxProps & { inline?: boolean };

export const Flex = forwardRefWithAs<'div', FlexBoxProps>(
  ({ display, inline = false, flexDirection = 'row', ...props }, ref) => {
    return (
      <Box
        ref={ref}
        display={display ?? (inline ? 'inline-flex' : 'flex')}
        flexDirection={flexDirection}
        {...props}
      />
    );
  }
);
