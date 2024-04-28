import type { NextPage } from 'next';
import { Fragment } from 'react';
import { Stack } from '../components/ui/box';
import { Header } from '../components/Header';
import { HomeHero } from '../components/Home/HomeHero';
import { Projects } from '../components/Home/Projects';
import { PageContainer } from '../components/Container';
import { Development } from '../components/Home/Development';
import { Dribbble } from '../components/Home/Dribbble/Dribbble';
import { getAllProjects } from '../lib/mdxContent/projects';
import type { Project } from '../lib/mdxContent/projects';
import { Prose } from 'components/ui/prose';

type HomePageProps = {
  allProjects: Project[];
};

const Home: NextPage<HomePageProps> = ({ allProjects }) => {
  return (
    <Fragment>
      <Header />
      <PageContainer>
        <HomeHero />
        <Stack gap="xxxlarge" marginBottom="xxxlarge">
          <Projects data={allProjects} />
          <Development />
          <Dribbble />

          <Prose>
            <h2>Contact Me</h2>
            <p>
              Would you like to get in touch? Feel free to message me through{' '}
              <a href="https://www.linkedin.com/in/nathan-simpson-71512a75/?trk">
                LinkedIn
              </a>
              .
            </p>
          </Prose>
        </Stack>
      </PageContainer>
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
