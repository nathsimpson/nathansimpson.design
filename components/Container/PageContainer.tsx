import { Box, Flex } from 'components/ui/box';
import { PropsWithChildren, ElementType } from 'react';
import { spacing, maxWidth } from '../../lib/theme';

type ContainerProps = PropsWithChildren<{
  as?: ElementType;
}>;

// This is a container component that is used to constrain the width of a page
export const PageContainer = ({ as = 'div', children }: ContainerProps) => {
  return (
    <Flex as={as} justifyContent="center">
      <Box
        paddingX="medium"
        width="100%"
        css={{
          maxWidth: maxWidth.page
        }}
      >
        {children}
      </Box>
    </Flex>
  );
};
