/** @jsx jsx */
import { TextLinkGatsby } from '../../design-system/textlink';
import { jsx } from '@emotion/core';

export const BackIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
};
export const BackButton = ({ link }) => {
  return (
    <div css={{ display: 'flex' }}>
      <TextLinkGatsby
        size="large"
        to={link}
        css={{
          marginLeft: -32,
          alignItems: 'center',
          display: 'inline-flex'
        }}
      >
        <BackIcon />
        Back
      </TextLinkGatsby>
    </div>
  );
};
