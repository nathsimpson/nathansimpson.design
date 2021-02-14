import React from 'react';

import { Heading } from '../../design-system/typography';

export default class NotFound extends React.Component {
  render() {
    return (
      <main>
        <Heading level={1}>404 Nothing was found</Heading>
      </main>
    );
  }
}
