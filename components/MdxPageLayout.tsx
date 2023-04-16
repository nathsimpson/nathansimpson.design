import { Fragment, ReactNode } from 'react';
import { ContentContainer } from './Container/ContentContainer';
import { Prose } from './ui/prose';
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
