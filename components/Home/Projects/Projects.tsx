import { ProjectCard } from './ProjectCard';
import type { Project } from 'lib/mdxContent/projects';

import { Heading } from '../../ui/typography';
import { Stack } from '../../ui/box';
import { useTheme } from '../../../lib/theme';

export const Projects = ({ data }: { data: Project[] }) => {
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
        {data.map(({ meta }) => {
          return (
            <ProjectCard
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
