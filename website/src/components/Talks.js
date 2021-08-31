/** @jsx jsx */
import { jsx } from '@emotion/core';

import { useCardStyles } from '@design-system/card';
import { Heading, Text } from '@design-system/typography';
import { Stack } from '@design-system/stack';
import { useTheme } from '@design-system/theme';
import { TextLink } from '@design-system/textlink';
import { useMediaQuery } from '@design-system/utils';

export const Talks = ({ data }) => (
  <div css={{ width: '100%' }}>
    <Stack gap="medium" css={{ maxWidth: 800 }}>
      <Heading level={2}>Talks</Heading>

      <Text as="p">
        Occasionally I give talks at{' '}
        <TextLink href="https://www.sydjs.com/" target="_blank">
          SydJS
        </TextLink>
        {' and '}
        <TextLink
          href="https://www.meetup.com/en-AU/React-Sydney/"
          target="_blank"
        >
          React Sydney
        </TextLink>{' '}
        meetups. Check out the recordings below, and come and say hi at the next
        one!
      </Text>
      {data.allMdx.edges
        .filter(({ node }) => node.frontmatter.type === 'talk')
        .map(({ node }) => (
          <Talk node={node} key={node.id} />
        ))}
    </Stack>
  </div>
);

const Talk = ({
  node: {
    body,
    frontmatter: { path, youtubeid, title }
  }
}) => {
  const { colors, radii } = useTheme();
  const cardStyles = useCardStyles();
  const defaultBorder = `1px solid ${colors.global.border}`;
  const { mq } = useMediaQuery();

  return (
    <a
      href={path}
      css={mq({
        ...cardStyles,
        borderLeft: [defaultBorder, `2px solid ${colors.global.brand}`],
        borderTop: [`2px solid ${colors.global.brand}`, defaultBorder],
        borderTopLeftRadius: radii.none,
        borderBottomLeftRadius: [radii.large, 0],
        display: 'flex',
        flexDirection: ['column', 'row'],
        maxWidth: 800,
        padding: 0,
        width: '100%',
        textDecoration: 'none',
        '&:hover span': {
          textDecoration: 'underline'
        }
      })}
    >
      <div
        css={mq({
          width: ['auto', 220],
          height: [160, 'auto'],
          backgroundColor: colors.background.emphasis,
          backgroundImage: `url(https://i.ytimg.com/vi/${youtubeid}/hqdefault.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        })}
      />
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        <Stack gap="small" padding="large">
          <Heading level={3}>{title}</Heading>
          <span href={path} css={{ color: colors.text.link }}>
            Watch now
          </span>
        </Stack>
      </div>
    </a>
  );
};
