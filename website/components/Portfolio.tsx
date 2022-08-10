import { Heading } from '@nathsimpson/typography';
import { Card } from '@nathsimpson/card';
import { useTheme } from '@nathsimpson/theme';

export const Portfolio = ({ items }) => {
  const { spacing } = useTheme();
  return (
    <div css={{ width: '100%' }}>
      <Heading level={2} css={{ marginBottom: spacing.large }}>
        Projects
      </Heading>
      <div
        css={{
          boxSizing: 'border-box',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: spacing.large,
          width: '100%'
        }}
      >
        {items.map((node) => {
          return (
            <Card
              key={node.id}
              // project={meta}
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
    </div>
  );
};
