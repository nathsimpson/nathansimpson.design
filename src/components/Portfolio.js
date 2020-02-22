import { Link } from 'gatsby';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

/** @jsx jsx */

const Portfolio = ({ data }) => (
  <div>
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gridColumnGap: 16,
        gridRowGap: 16
      }}
    >
      {data.allMarkdownRemark.edges.map(project => (
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
    <Link to={`${project.slug}`} key={project.path}>
      <PortfolioItemDiv className="PortfolioItemDiv">
        <PortfolioItemImage
          src={
            'http://files.nathansimpson.design/portfolio/' + project.imagesrc
          }
          alt={project.title}
        />
        <PortfolioItemLabel className="portfolio_item_label">
          {project.title}
        </PortfolioItemLabel>
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
  margin: 0
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
  display: 'none',
  position: 'absolute',
  bottom: 0,
  fontSize: '1.5em',
  lineHeight: '1.2em',
  color: 'white',
  fontWeight: 700,
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
    // background: 'none',
    // background: '-webkit-linear-gradient(rgba(37, 45, 52, 0), #000)',
    // background: '-o-linear-gradient(rgba(37, 45, 52, 0), #000)',
    // background: '-moz-linear-gradient(rgba(37, 45, 52, 0), #000)',
    background: 'linear-gradient(rgba(37, 45, 52, 0), #000)'
  }
});

export default Portfolio;
