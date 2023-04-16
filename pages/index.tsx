import type { NextPage } from 'next';
import { Fragment } from 'react';
import { Stack } from '../components/design-system/box';
import { Header } from '../components/Header';
import { Hero } from '../components/Home/Hero';
import { Portfolio } from '../components/Portfolio';
import { Container } from '../components/Container';
import { Development } from '../components/Development';
import { Dribbble } from '../components/Dribbble';
import { getAllProjects } from '../lib/projects';
import type { Project } from '../lib/projects';
import { Prose } from 'components/design-system/prose';

type HomePageProps = {
  allProjects: Project[];
};

const Home: NextPage<HomePageProps> = ({ allProjects }) => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Container>
        <Stack gap="xxxlarge" marginBottom="xxxlarge">
          <Portfolio projects={allProjects} />
          <Development />
          <Dribbble />

          <Prose>
            <h2>Contact Me</h2>
            <p>
              Would you like to get in touch? Feel free to message me through{' '}
              <a href="https://twitter.com/nathjsimpson" target="_blank">
                Twitter
              </a>{' '}
              or{' '}
              <a href="https://www.linkedin.com/in/nathan-simpson-71512a75/?trk">
                LinkedIn
              </a>
              .
            </p>
          </Prose>
        </Stack>
      </Container>
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const allProjects = await getAllProjects();

  return {
    props: { allProjects }
  };
};

export default Home;
