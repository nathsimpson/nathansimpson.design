/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

import { FlexBox } from '../box';
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
      {image && (
        <div
          css={{
            display: 'flex',
            flex: 1,
            borderTopLeftRadius: cardStyles.borderRadius,
            borderTopRightRadius: cardStyles.borderRadius,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            width: '100%'
          }}
        />
      )}

      <FlexBox>
        <Stack gap="xsmall" padding="medium">
          <Text as="span" size="xsmall">
            {tag}
          </Text>
          <Label>{title}</Label>
          {!image && desc && <Text>{desc}</Text>}
        </Stack>
      </FlexBox>
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
  aspectRatio: '1',
  display: 'flex',
  flexDirection: 'column',
  textDecoration: 'none',
  minHeight: 250,
  boxSizing: 'border-box',
  cursor: 'pointer',
  textAlign: 'left',
  padding: 0,
  wordWrap: 'normal',

  '&:hover': {
    backgroundColor: colors.backgroundHover
  }
});
