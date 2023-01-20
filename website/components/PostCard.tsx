import { Tag } from '@nathsimpson/tag';
import { Divider } from '../components/Divider';
import { useCardStyles } from '@nathsimpson/card';
import { Flex, Stack } from '@nathsimpson/box';
import { Prose } from '@nathsimpson/prose';
import { Heading, Text } from '@nathsimpson/typography';
import { NextTextLink } from './NextTextLink';

type PostCardProps = {
  date: string;
  updated: string;
  href: string;
  title: string;
  type: 'Post' | 'Talk';
  youtubeid?: string;
  description?: string;
  excerpt: string;
};

export const PostCard = ({
  date,
  updated,
  href,
  title,
  type,
  youtubeid,
  description,
  excerpt
}: PostCardProps) => {
  const cardStyles = useCardStyles();
  const postedOn = `${new Date(date).toDateString()}. ${
    updated ? `Updated ${new Date(updated).toDateString()}.` : ''
  }`;

  return (
    <div css={cardStyles}>
      <Stack gap="small">
        <NextTextLink href={href}>
          <Heading level={2}>{title}</Heading>
        </NextTextLink>
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
        <NextTextLink href={href}>Read more</NextTextLink>
      </Stack>
    </div>
  );
};
