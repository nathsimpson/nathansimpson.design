import { Heading } from './design-system/typography';
import { Stack } from './design-system/box';
import { Card } from './design-system/card';
import { useTheme } from './design-system/theme';
import type { Project } from 'lib/projects';

export const Portfolio = ({ projects }: { projects: Project[] }) => {
  const { spacing } = useTheme();
  return (
    <Stack gap="large" css={{ width: '100%' }}>
      <Heading level={2}>Projects</Heading>
      <div
        css={{
          boxSizing: 'border-box',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: spacing.large,
          width: '100%'
        }}
      >
        {projects.map(({ meta }) => {
          return (
            <Card
              key={meta.slug}
              // desc={meta.desc}
              tag={meta.tag}
              path={`projects/${meta.slug}`}
              image={
                meta.imagesrc &&
                'https://files.nathansimpson.design/portfolio/' + meta.imagesrc
              }
              title={meta.title}
            />
          );
        })}
      </div>
    </Stack>
  );
};
