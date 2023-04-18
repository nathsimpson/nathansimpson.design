import { useTheme } from '../../../lib/theme';
import { Flex, Stack } from '../../ui/box';
import { useCardStyles } from '../../ui/styles/useCardStyles';
import { Text } from '../../ui/typography';
import Link from 'next/link';

type ProjectCardProps = {
  desc?: string;
  path: string;
  image?: string;
  title: string;
  tag: 'Design' | 'Development';
};

export const ProjectCard = ({
  path,
  image,
  desc,
  title,
  tag
}: ProjectCardProps) => {
  const { colors, fontSizes, fontFamilies } = useTheme();
  const cardStyles = useCardStyles();
  return (
    <Link
      href={path}
      css={{
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
          backgroundColor: colors.background.hover
        }
      }}
    >
      {image && (
        <div
          css={{
            display: 'flex',
            flex: 1,
            backgroundColor: colors.border,
            borderBottom: `1px solid ${colors.border}`,
            borderTopLeftRadius: cardStyles.borderRadius,
            borderTopRightRadius: cardStyles.borderRadius,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            width: '100%'
          }}
        />
      )}

      <Flex>
        <Stack gap="none" padding="medium">
          <Text as="span" size="xsmall" color="muted">
            {tag}
          </Text>
          <span
            css={{
              fontFamily: fontFamilies.heading,
              color: colors.text.default,
              fontSize: fontSizes.large,
              fontWeight: 600,
              textDecoration: 'none',
              display: 'block',
              width: '100%'
            }}
          >
            {title}
          </span>
          {!image && desc && <Text>{desc}</Text>}
        </Stack>
      </Flex>
    </Link>
  );
};
