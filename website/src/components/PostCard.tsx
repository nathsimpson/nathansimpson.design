/** @jsx jsx */
import { jsx } from '@emotion/core';

import { Tag } from '@nathsimpson/tag';
import { Divider } from '../components/Divider';
import { useCardStyles } from '@nathsimpson/card';
import { Flex, Stack } from '@nathsimpson/box';
import { Prose } from '@nathsimpson/prose';
import { Heading, Text } from '@nathsimpson/typography';
import { TextLinkGatsby } from '../components/TextLinkGatsby';

type PostCardProps = {
  date: string;
  updated: string;
  path: string;
  title: string;
  type: 'Post' | 'Talk';
  youtubeid?: string;
  description?: string;
  excerpt: string;
};

export const PostCard = ({
  date,
  updated,
  path,
  title,
  type,
  youtubeid,
  description,
  excerpt
}: PostCardProps) => {
  const cardStyles = useCardStyles();
  const postedOn = `${date}. ${updated ? `Updated ${updated}.` : ''}`;

  return (
    <div css={cardStyles}>
      <Stack gap="small">
        <TextLinkGatsby to={path}>
          <Heading level={2}>{title}</Heading>
        </TextLinkGatsby>
        <Flex flexDirection="row" alignItems="center">
          <Tag label={type} size="small" />
          <Text as="span" size="small" marginLeft="small">
            {postedOn}
          </Text>
        </Flex>

        <Divider />

        {youtubeid && (
          <img
            css={{ width: '100%', height: 400, objectFit: 'cover' }}
            src={`https://i.ytimg.com/vi/${youtubeid}/hqdefault.jpg`}
            alt="Screenshot of YouTube video"
          />
        )}
        <Prose>{description || excerpt}</Prose>
        <TextLinkGatsby to={path}>Read more</TextLinkGatsby>
      </Stack>
    </div>
  );
};
