import { Fragment, ReactNode } from 'react';
import { ContentContainer } from './ContentContainer';
import { Prose } from '@nathsimpson/prose';
import { Header } from './Header';

export const MdxPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Header />
      <ContentContainer>
        <Prose>{children}</Prose>
      </ContentContainer>
    </Fragment>
  );
};
