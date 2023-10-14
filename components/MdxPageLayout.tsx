import { Fragment, ReactNode } from 'react';
import { ContentContainer } from './Container/ContentContainer';
import { Prose } from './ui/prose';
import { Header, BackToPageConfig, backToHome } from './Header';

export const MdxPageLayout = ({
  children,
  backTo,
  backToHome: goBackToHome
}: {
  children: ReactNode;
  backToHome?: boolean;
  backTo: BackToPageConfig;
}) => {
  return (
    <Fragment>
      <Header backTo={goBackToHome ? backToHome : backTo} />
      <ContentContainer>
        <Prose>{children}</Prose>
      </ContentContainer>
    </Fragment>
  );
};
