import React from 'react';

import { Stack } from '../design-system/box';
import { Heading, Text } from '../design-system/typography';
import { TextLink } from '../design-system/text-link';

import { DribbbleGrid } from './DribbbleGrid';
import { useFetchDribbbleShots } from './fetchDribbbleShots';
import { Skeleton } from './DribbbleShotSkeleton';

export const Dribbble = () => {
  const { loading, data, error } = useFetchDribbbleShots();

  return (
    <Stack gap="medium" css={{ width: '100%' }}>
      <Heading level={2}>Other work</Heading>

      <Text>
        I occasionally post in-progress design work on my{' '}
        <TextLink
          href="https://dribbble.com/nathansimpson"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dribbble
        </TextLink>{' '}
        page.
      </Text>

      {error ? (
        'Error fetching Dribbble shots'
      ) : (
        <DribbbleGrid>
          {loading
            ? [1, 2, 3, 4, 5, 6].map((item) => <Skeleton key={item} />)
            : data.map(({ id, link, imageUrl, description }) => (
                <a
                  href={link}
                  key={id}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={imageUrl}
                    title={description}
                    alt={description}
                    css={{ width: '100%' }}
                  />
                </a>
              ))}
        </DribbbleGrid>
      )}
    </Stack>
  );
};
