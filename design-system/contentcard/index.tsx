/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

import { cardStyles } from '../card';
import { Stack } from '../stack';
import { Text } from '../typography';
import { fontsizes, fontFamilies, colors } from '../theme';

type ContentCardProps = {
  desc?: string;
  path: string;
  image?: string;
  title: string;
  tag: 'Design' | 'Development';
};

export const ContentCard = ({
  path,
  image,
  desc,
  title,
  tag
}: ContentCardProps) => {
  return (
    <Link to={path} css={contentCardStyles}>
      <Stack gap="small">
        {image && (
          <div
            css={{
              borderTopLeftRadius: cardStyles.borderRadius,
              borderTopRightRadius: cardStyles.borderRadius,
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              // flex: 1,
              width: '100%',
              // display: 'flex',
              height: 0,
              paddingTop: '70%'
            }}
          />
        )}

        <Stack gap="xsmall" padding="medium">
          <Text as="span" size="xsmall">
            {tag}
          </Text>
          <Label>{title}</Label>
          {!image && desc && <Text>{desc}</Text>}
        </Stack>
      </Stack>
    </Link>
  );
};

const Label = styled.div({
  fontFamily: fontFamilies.heading,
  color: colors.foregroundEmphasis,
  fontSize: fontsizes.large,
  fontWeight: 600,
  textDecoration: 'none',
  display: 'block',
  width: '100%'
});

const contentCardStyles = css({
  ...cardStyles,
  textDecoration: 'none',
  boxSizing: 'border-box',
  cursor: 'pointer',
  textAlign: 'left',
  // CSS trick to make a square
  height: 0,
  padding: 0,
  paddingBottom: '100%',
  wordWrap: 'normal',

  '&:hover': {
    backgroundColor: colors.backgroundHover
  }
});
