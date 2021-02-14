/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { Heading } from '../../design-system/typography';

import {
  fontsizes,
  fontFamilies,
  colors,
  spacing
} from '../../design-system/theme';

const Portfolio = ({ data }) => (
  <div css={{ width: '100%' }}>
    <Heading level={3} css={{ marginBottom: spacing.large }}>
      Projects
    </Heading>
    <div
      css={{
        display: 'grid',
        width: '100%',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 12
      }}
    >
      {data.allMdx.edges
        .filter(({ node }) => node.frontmatter.type === 'project')
        .map(project => (
          <PortfolioItem
            key={project.node.id}
            project={project.node.frontmatter}
          />
        ))}
    </div>
  </div>
);

const PortfolioItem = ({ project }) => {
  return (
    <Link to={`${project.path}`} key={project.path}>
      <PortfolioItemDiv className="PortfolioItemDiv">
        <PortfolioItemImage
          src={
            'https://files.nathansimpson.design/portfolio/' + project.imagesrc
          }
          alt={project.title}
        />
        <PortfolioItemLabel>{project.title}</PortfolioItemLabel>
        <PortfolioItemGradient />
      </PortfolioItemDiv>
    </Link>
  );
};

const PortfolioItemDiv = styled.div({
  width: '100%',
  height: 0,
  paddingBottom: '100%',
  overflow: 'hidden',
  position: 'relative',
  margin: 0,
  textAlign: 'left'
});

const PortfolioItemImage = styled.img({
  filter: 'grayscale(100%)',
  width: '100%',
  opacity: 0.4,
  transition: 'filter 1s, opacity 0.5s',

  '.PortfolioItemDiv:hover &': {
    filter: 'grayscale(0%)',
    opacity: 1
  }
});

const PortfolioItemLabel = styled.span({
  fontFamily: fontFamilies.heading,
  lineHeight: 1.1,
  color: colors.foregroundEmphasis,
  margin: 0,
  marginTop: spacing.xlarge,
  fontSize: fontsizes.xlarge,
  fontWeight: 600,
  display: 'none',
  position: 'absolute',
  bottom: 0,
  zIndex: 3,
  padding: 10,

  '.PortfolioItemDiv:hover &': {
    display: 'block'
  }
});

const PortfolioItemGradient = styled.span({
  '.PortfolioItemDiv:hover &': {
    width: '100%',
    height: 200,
    position: 'absolute',
    bottom: 0,
    left: 0,
    background: 'linear-gradient(rgba(37, 45, 52, 0), #000)'
  }
});

export default Portfolio;
