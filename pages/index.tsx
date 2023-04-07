import type { NextPage } from 'next';
import { Fragment } from 'react';
import { Stack } from '../components/design-system/box';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Portfolio } from '../components/Portfolio';
import { Container } from '../components/Container';
import { Development } from '../components/Development';
import { Dribbble } from '../components/Dribbble';
import { Contact } from '../components/Contact';
import { getAllProjects } from '../lib/projects';
import type { Project } from '../lib/projects';

type HomePageProps = {
  allProjects: Project[];
};

const Home: NextPage<HomePageProps> = ({ allProjects }) => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Container>
        <Stack gap="xxxlarge" marginBottom="xxxlarge" alignItems="center">
          <Portfolio projects={allProjects} />
          <Development />
          <Dribbble />
          <Contact />
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
