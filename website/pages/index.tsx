import type { NextPage } from 'next';
import { Fragment } from 'react';
import { Stack } from '@nathsimpson/box';

import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Portfolio } from '../components/Portfolio';
import { Container } from '../components/Container';
import { Development } from '../components/Development';
import { Dribbble } from '../components/Dribbble';
import { Contact } from '../components/Contact';
import { getAllProjects } from '../lib/projects';
import { ProjectType } from '../interfaces/project';

type Props = {
  allProjects: ProjectType[];
};

const Home: NextPage = ({ allProjects }: Props) => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Container>
        <Stack gap="xxxlarge" marginBottom="xxxlarge" alignItems="center">
          <Portfolio items={allProjects} />
          <Development />
          <Dribbble />
          <Contact />
        </Stack>
      </Container>
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    'title',
    'slug',
    'date',
    'imagesrc',
    'type',
    'tag',
    'skills'
  ]);

  return {
    props: { allProjects }
  };
};

export default Home;
