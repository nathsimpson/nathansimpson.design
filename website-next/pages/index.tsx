import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import { Stack } from '@nathsimpson/box';

import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Portfolio } from '../components/Portfolio';
import { Container } from '../components/Container';
import { Development } from '../components/Development';
import { Dribbble } from '../components/Dribbble';
import { getAllProjects } from '../lib/projects';
import { Contact } from '../components/Contact';

type Props = {
  allProjects: Project[];
};

const Home: NextPage = ({ allProjects }: Props) => {
  return (
    <Fragment>
      <Head>
        <title>Nathan Simpson</title>
        <meta
          name="description"
          content="I am a UI Designer, Frontend Developer, and aspiring entrepreneur, passionate about building ideas from concept to prototype."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
