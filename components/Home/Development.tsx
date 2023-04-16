import { Tags } from '../ui/tag';
import { Stack } from '../ui/box';
import { maxWidth } from '../../lib/theme';

import { Heading, Text } from '../ui/typography';
import { TextLink } from '../TextLink';

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
