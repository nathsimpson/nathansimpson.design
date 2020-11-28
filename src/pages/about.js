/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Helmet } from 'react-helmet';

import { Layout, Header } from '../components';

const App = ({ data }) => (
  <Layout>
    <Header />
    <Helmet>
      <title>Nathan Simpson - UI Designer + Developer</title>
    </Helmet>
    <div
      css={{
        maxWidth: 800,
        margin: '0 auto'
      }}
    >
      <h1>About</h1>
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
    </div>
  </Layout>
);

export default App;
