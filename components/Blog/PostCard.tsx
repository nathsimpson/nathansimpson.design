import { Tag } from '../ui/tag';
import { Divider } from '../Divider';
import { useCardStyles } from '../ui/utils/useCardStyles';
import { Flex, Stack } from '../ui/box';
import { Prose } from '../ui/prose';
import { Heading, Text } from '../ui/typography';
import { TextLink } from '../TextLink';

type PostCardProps = {
  date: string;
  updated?: string;
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
        <TextLink href={href}>
          <Heading level={2}>{title}</Heading>
        </TextLink>
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
        <TextLink href={href}>Read more</TextLink>
      </Stack>
    </div>
  );
};
