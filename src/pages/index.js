/** @jsx jsx */
import { jsx } from '@emotion/core';
import { graphql } from 'gatsby';

import Portfolio from '../components/Portfolio';
import { Development } from '../components/Development';
import { Talks } from '../components/Talks';
import { Block, Contact, Dribbble, Layout, Logo } from '../components';

const App = ({ data }) => (
  <Layout>
    <div
      css={{
        display: 'flex',
        alignItems: 'flex-start',
        minHeight: '60vh',
        maxWidth: 800,
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <Logo />
      <h1 css={{ margin: 0 }}>Nathan Simpson</h1>

      <p css={{ margin: 0 }}>
        UI Designer &amp; Developer at{' '}
        <a href="https://thinkmill.com.au">Thinkmill</a> in Sydney, Australia.
        I'm passionate about Design Systems, and building products from concept
        to delivery.
      </p>
    </div>

    <Portfolio data={data} />

    <Development />

    <Dribbble />

    <Block>
      <h2>Talks</h2>
      <Talks data={data} />
    </Block>

    <Block>
      <h2>Bio</h2>

      <p>
        Nathan Simpson is a frontend developer and user-interface designer based
        in Sydney, Australia. He is experienced with building and using Design
        Systems, and is passionate about building useful applications from
        concept to delivery.
      </p>

      <p>
        Born in Orange NSW, Nathan started designing logos and posters for
        family members from 13 year old. He then started developing a taste for
        digital experiences, and began designing websites and building them in
        HTML and CSS. After "accidentally" learning some PHP through creating
        custom Wordpress themes for clients, Nathan started getting into
        JavaScript and React.
      </p>

      <p>
        Nathan has a Bachelor of Design (Visual Communication) from Western
        Sydney University, where he studied Web and Interactive Design, Data
        Visualisation, and Programming Fundamentals. He also took an elective at
        the Sydney School of Entrepreneurship. Nathan learnt Frontend
        Development technologies like Javascript and React through Treehouse.
        Nathan is a regular attendee at SydJS and React Sydney meetups.
      </p>
    </Block>

    <Contact />
  </Layout>
);

export const portfolioQuery = graphql`
  query IndexProjects {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          html
          frontmatter {
            path
            title
            imagesrc
            type
            youtubeid
          }
        }
      }
    }
  }
`;

export default App;
