/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Layout } from '../components';

const App = ({ data }) => (
  <Layout>
    <h1>About</h1>
    <div>
      <h2>About Nathan</h2>
      <p>
        Born in Orange NSW, Nathan was heavily interested with computers, and
        design from a young age. He got started in the design industry when he
        was 13, designing logos and posters for family members. It was only a
        matter of time before he would start learning HTML and CSS, then
        creating custom Wordpress themes for clients.
      </p>
      <p>
        He studied the Bachelor of Design (Visual Communication) at Western
        Sydney University, where he studied Web and Interactive Design, Data
        Visualisation, and Programming Fundamentals. He also took an elective at
        the Sydney School of Entrepreneurship. On the side of university, Nathan
        learnt Frontend Development technologies like Javascript, Git, and React
        through Treehouse. Nathan is also a regular attendee at SydJS and React
        Sydney meetups.
      </p>
    </div>
  </Layout>
);

export default App;
