/** @jsx jsx */
import { jsx } from '@emotion/core';

import { borderRadius, colors, fontsizes, spacing } from '../theme';

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
    {data.allMarkdownRemark.edges
      .filter(({ node }) => node.frontmatter.type === 'talk')
      .map(({ node }) => (
        <div
          css={{
            backgroundColor: colors.slate['30'],
            borderLeft: `2px solid ${colors.orange}`,
            borderBottomRightRadius: borderRadius.lg,
            borderTopRightRadius: borderRadius.lg,
            display: 'flex',
            marginBottom: spacing.small,
            maxWidth: 800
          }}
          key={node.id}
        >
          <a
            href={node.frontmatter.path}
            css={{
              width: 220,
              backgroundColor: colors.slate['40'],
              backgroundImage: `url(https://i.ytimg.com/vi/${node.frontmatter.youtubeid}/hqdefault.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              padding: spacing.large
            }}
          >
            <h3
              css={{
                margin: 0,
                fontSize: fontsizes.xlarge
              }}
            >
              {node.frontmatter.title}
            </h3>
            <p
              css={{
                marginTop: spacing.small,
                marginBottom: spacing.none,
                fontSize: fontsizes.small
              }}
            >
              {node.html.replace(/<\/?p>/g, '').slice(0, 148)}
              {'... '}
              <a href={node.frontmatter.path}>Watch now</a>{' '}
            </p>
          </div>
        </div>
      ))}
  </div>
);
