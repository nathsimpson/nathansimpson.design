import { Tags } from '@nathsimpson/tag';
import { Stack } from '@nathsimpson/box';
import { maxWidth } from '@nathsimpson/theme';

import { Heading, Text } from '@nathsimpson/typography';
import { TextLink } from '@nathsimpson/text-link';

const development_skills = [
  'JavaScript',
  'TypeScript',
  'Design Systems',
  'React',
  'React Native',
  'NextJS',
  'Gatsby',
  'NodeJS',
  'Keystone',
  'Swift'
];

export const Development = () => {
  return (
    <div css={{ width: '100%' }}>
      <Stack gap="medium" css={{ maxWidth: maxWidth.content }}>
        <Heading level={2}>Development</Heading>
        <Text>
          I love bringing concepts to life through code. Most of my time is
          spent building products for awesome clients, as well as creating and
          contributing to open source libraries. I share many of my projects to{' '}
          <TextLink href="https://github.com/nathsimpson" target="_blank">
            GitHub
          </TextLink>
          .
        </Text>
        <Text>I'm experienced with the following technologies...</Text>
        <Tags size="medium" items={development_skills} />
      </Stack>
    </div>
  );
};