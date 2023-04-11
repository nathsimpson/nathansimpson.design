import { forwardRefWithAs } from '../utils';
import { Box } from './Box';
import { BoxProps } from './styles';

export type StackProps = Omit<BoxProps, 'display' | 'flexDirection'>;

export const Stack = forwardRefWithAs<'div', StackProps>(
  (
    { justifyContent = 'flex-start', alignItems = 'stretch', ...props },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        display="flex"
        flexDirection="column"
        justifyContent={justifyContent}
        alignItems={alignItems}
        {...props}
      />
    );
  }
);
