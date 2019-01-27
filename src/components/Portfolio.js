import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const PortfolioItemDiv = styled.div({
	width: '100%',
	height: 0,
	paddingBottom: '100%',
	overflow: 'hidden',
	position: 'relative',
	margin: 0,
})

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
		background: 'none',
		background: '-webkit-linear-gradient(rgba(37, 45, 52, 0), #000)',
		background: '-o-linear-gradient(rgba(37, 45, 52, 0), #000)',
		background: '-moz-linear-gradient(rgba(37, 45, 52, 0), #000)',
		background: 'linear-gradient(rgba(37, 45, 52, 0), #000)',
	}
})

class PortfolioItem extends React.Component {
	render() {
		const projectMeta = this.props.project.frontmatter;
		return (
			<Link to={`${projectMeta.slug}`} key={projectMeta.path}>
				<PortfolioItemDiv className="PortfolioItemDiv">
					<PortfolioItemImage
						className="portfolio_item_image"
						src={
							"http://files.nathansimpson.design/portfolio/" +
							projectMeta.imagesrc
						}
						alt={projectMeta.title}
					/>
					<PortfolioItemLabel className="portfolio_item_label">
						{projectMeta.title}
					</PortfolioItemLabel>
					<PortfolioItemGradient />
				</PortfolioItemDiv>
			</Link>
		);
	}
}

const Portfolio = props => (
	<div className="portfolio" id="portfolio">
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
				gridColumnGap: 16,
				gridRowGap: 16
			}}
		>
			{props.data.allMarkdownRemark.edges.map(project => (
				<PortfolioItem key={project.node.id} project={project.node} />
			))}
		</div>
	</div>
);

export default Portfolio;
