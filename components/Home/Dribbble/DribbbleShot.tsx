import { Box } from '../../design-system/box';

export const DribbbleShot = ({
  link,
  id,
  imageUrl,
  description
}: {
  link: string;
  id: string;
  imageUrl: string;
  description: string;
}) => {
  return (
    <a href={link} key={id} target="_blank" rel="noopener noreferrer">
      <img
        src={imageUrl}
        title={description}
        alt={description}
        css={{ width: '100%' }}
      />
    </a>
  );
};

export const DribbbleShotSkeleton = () => {
  return (
    <Box
      bg="emphasis"
      css={{
        width: '100%',
        aspectRatio: '4/3'
      }}
    />
  );
};
