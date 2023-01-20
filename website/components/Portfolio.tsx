import { Heading } from '@nathsimpson/typography';
import { Stack } from '@nathsimpson/box';
import { Card } from '@nathsimpson/card';
import { useTheme } from '@nathsimpson/theme';
import { ProjectWithSlug } from 'website/interfaces';

export const Portfolio = ({ projects }: { projects: ProjectWithSlug[] }) => {
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
        {projects.map((node) => {
          return (
            <Card
              key={node.slug}
              // desc={node.desc}
              tag={node.tag}
              path={`projects/${node.slug}`}
              image={
                node.imagesrc &&
                'https://files.nathansimpson.design/portfolio/' + node.imagesrc
              }
              title={node.title}
            />
          );
        })}
      </div>
    </Stack>
  );
};
