/** @jsx jsx */
import { jsx } from '@emotion/core';

import { Heading } from '@nathsimpson/typography';
import { Card } from '@design-system/card';
import { Tiles } from '@design-system/tiles';
import { useTheme } from '@nathsimpson/theme';

export const Portfolio = ({ data }) => {
  const { spacing } = useTheme();
  return (
    <div css={{ width: '100%' }}>
      <Heading level={2} css={{ marginBottom: spacing.large }}>
        Projects
      </Heading>
      <Tiles>
        {data.allMdx.edges
          .filter(({ node }) => node.frontmatter.type === 'project')
          .map(({ node }) => {
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
                  'https://files.nathansimpson.design/portfolio/' +
                    meta.imagesrc
                }
                title={meta.title}
              />
            );
          })}
      </Tiles>
    </div>
  );
};
