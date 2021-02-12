/** @jsx jsx */
import { jsx } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Heading } from '../../design-system/typography';

import {
  borderRadius,
  colors,
  fontsizes,
  spacing
} from '../../design-system/theme';
import { mq } from '../helpers/utils';

export const Talks = ({ data }) => (
  <div>
    <p>
      Occasionally I give talks at{' '}
      <a href="https://www.sydjs.com/" target="_blank">
        SydJS
      </a>
      {' and '}
      <a href="https://www.meetup.com/en-AU/React-Sydney/" target="_blank">
        React Sydney
      </a>{' '}
      meetups. Check out the recordings below, and come and say hi at the next
      one!
    </p>
    {data.allMdx.edges
      .filter(({ node }) => node.frontmatter.type === 'talk')
      .map(({ node }) => (
        <Talk node={node} key={node.id} />
      ))}
  </div>
);

const Talk = ({
  node: {
    body,
    frontmatter: { path, youtubeid, title }
  }
}) => {
  const defaultBorder = `1px solid ${colors.border}`;

  return (
    <a
      href={path}
      css={mq({
        color: colors.foreground,
        backgroundColor: colors.backgroundEmphasis,
        border: defaultBorder,
        borderLeft: [defaultBorder, `2px solid ${colors.brand}`],
        borderTop: [`2px solid ${colors.brand}`, defaultBorder],
        borderBottomRightRadius: borderRadius.lg,
        borderTopRightRadius: [0, borderRadius.lg],
        borderBottomLeftRadius: [borderRadius.lg, 0],
        display: 'flex',
        flexDirection: ['column', 'row'],
        marginBottom: spacing.large,
        maxWidth: 800,
        '&:hover': {
          textDecoration: 'none'
        },
        '&:hover span': {
          textDecoration: 'underline'
        }
      })}
    >
      <div
        css={mq({
          width: ['auto', 220],
          height: [160, 'auto'],
          backgroundColor: colors.backgroundEmphasis,
          backgroundImage: `url(https://i.ytimg.com/vi/${youtubeid}/hqdefault.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        })}
      />
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: spacing.large
        }}
      >
        <Heading
          level={3}
          css={{
            margin: 0,
            fontSize: fontsizes.xlarge
          }}
        >
          {title}
        </Heading>
        <p
          css={{
            marginTop: spacing.small,
            marginBottom: spacing.none,
            fontSize: fontsizes.small
          }}
        >
          <MDXRenderer>{body}</MDXRenderer>
          {'... '}
          <span href={path} css={{ color: colors.orange }}>
            Watch now
          </span>
        </p>
      </div>
    </a>
  );
};
