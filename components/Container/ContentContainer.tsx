import { Box, Flex } from 'components/ui/box';
import { ReactNode } from 'react';
import { maxWidth } from '../../lib/theme';

/** This is a container component that is used to constrain the width of written post content */
export const ContentContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Flex justifyContent="center">
      <Box
        paddingX="xlarge"
        width="100%"
        css={{
          maxWidth: maxWidth.content
        }}
      >
        {children}
      </Box>
    </Flex>
  );
};
