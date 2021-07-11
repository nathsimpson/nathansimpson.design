/** @jsx jsx */
import { TextLinkGatsby } from '@design-system/textlink';
import { Icon } from '@design-system/icon';
import { jsx } from '@emotion/core';

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
        <Icon icon="chevronLeft" size={32} />
        Back
      </TextLinkGatsby>
    </div>
  );
};
