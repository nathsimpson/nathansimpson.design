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
        {items.map(({ node }) => {
          const meta = node.frontmatter;

          return (
            <Card
              key={node.id}
              project={meta}
              desc={meta.desc}
              tag={meta.tag}
              path={meta.path}
              image={
                meta.imagesrc &&
                'https://files.nathansimpson.design/portfolio/' + meta.imagesrc
              }
              title={meta.title}
            />
          );
        })}
      </div>
    </div>
  );
};
