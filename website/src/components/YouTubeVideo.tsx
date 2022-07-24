/** @jsx jsx */
import { jsx } from '@emotion/core';

export const YouTubeVideo = ({ videoId }: { videoId: string }) => {
  return (
    <iframe
      width="100%"
      height="450"
      css={{
        boxSizing: 'border-box',
        paddingRight: 16,
        width: '100%'
      }}
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      title="YouTube video"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};
