/** @jsx jsx */
import Layout from '../templates/layout';
import { jsx } from '@emotion/core';
import { graphql } from 'gatsby';

import Helmet from 'react-helmet';
import Portfolio from '../components/Portfolio';
import { Card, Contact, Dribbble } from '../components';
import { colors, borderRadius, text } from '../theme';
import hexAlpha from 'hex-alpha';
import { getBreakpoints } from '../helpers/utils';

const mq = getBreakpoints();

const App = ({ data }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Nathan Simpson - Designer + Frontend Developer</title>
      <meta
        name="description"
        content="I am a UX Designer, Frontend Developer, and aspiring entrepreneur, passionate about building ideas from concept to prototype."
      />
    </Helmet>
    <main>
      <div
        css={{
          display: 'flex',
          minHeight: '60vh',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <h1 css={{ margin: 0 }}>Nathan Simpson</h1>

        <p
          css={{
            margin: 0,
            maxWidth: 600
          }}
        >
          Designer &amp; Frontend Developer at{' '}
          <a href="https://thinkmill.com.au">Thinkmill</a> in Sydney, Australia.
          Passionate about building products from concept to delivery.
        </p>
        <div
          style={{
            background: colors.slate[0],
            padding: 12,
            borderRadius: borderRadius.md,
            maxWidth: 500,
            marginTop: 16
          }}
        >
          <p
            css={{
              ...text[1],
              fontWeight: 700,
              margin: 0
            }}
          >
            Latest
          </p>
          <p css={{ ...text[2], color: 'white', margin: 0 }}>
            Thinkmill recently helped Reckon deliver{' '}
            <a href="https://www.reckon.com/au/payroll-app/" target="_blank">
              Reckon Payroll
            </a>{' '}
            for Australian Businesses
          </p>
        </div>
      </div>

      <h2>Design</h2>
      <p>
        Design has been my passion for over 10 years. I focus on User Interface
        (UI) Design for native and web apps, with the odd Branding project here
        and there.
      </p>
      <Portfolio data={data} />

      <Block>
        <h2>Development</h2>

        <div
          css={{
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          <div
            css={{
              boxSizing: 'border-box',
              paddingRight: 16,
              width: '100%',
              [mq[1]]: {
                width: '50%'
              }
            }}
          >
            <p>
              Aside from my Design activities, I love bringing concepts to life
              through code. Most of my time is spent building products for some
              awesome clients, as well as creating and contributing to open
              source libraries.
            </p>
            <h3>Experienced with</h3>
            <ul
              css={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexWrap: 'wrap'
              }}
            >
              {[
                'JavaScript',
                'TypeScript',
                'Swift',
                'React',
                'React Native',
                'NextJS',
                'Gatsby',
                'NodeJS',
                'Keystone'
              ].map(item => (
                <li
                  css={{
                    padding: '4px 8px',
                    border: `1px solid ${colors.orange}`,
                    marginRight: 6,
                    marginBottom: 6,
                    color: colors.orange,
                    backgroundColor: hexAlpha(colors.orange, 0.2),
                    borderRadius: borderRadius.sm
                  }}
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            css={{
              width: '100%',
              [mq[1]]: {
                width: '50%'
              }
            }}
          >
            <h3>Some things I've worked on</h3>
            <ul css={{ padding: 0 }}>
              {[
                {
                  name: 'The Garage',
                  link: 'https://thegarageapp.com',
                  type: 'Owner',
                  desc:
                    'The Garage is an social network for car lovers in Sydney Australia.'
                },
                {
                  name: 'KeystoneJS',
                  link:
                    'https://github.com/keystonejs/keystone-5/graphs/contributors',
                  type: 'Contributor',
                  openSource: true,
                  team: true,
                  desc:
                    'KeystoneJS is a scalable platform and CMS for Node.js applications. `schema => ({ GraphQL, AdminUI })`'
                },
                {
                  name: 'Reckon Payroll',
                  link: 'https://www.reckon.com/au/payroll-app/',
                  team: true,
                  desc:
                    'Enables small businesses to conveniently do Payroll and STP reporting from an iOS or Android device.'
                },
                {
                  name: 'IsobelJS',
                  openSource: true,
                  link: 'https://isobeljs.com/',
                  type: 'Owner',
                  desc:
                    'A beginner-friendly NodeJS framework for fetching data from your social profiles and other sources, to display in your own apps and websites.'
                },
                {
                  name: 'hex-alpha',
                  openSource: true,
                  link: 'https://github.com/nathsimpson/hex-alpha',
                  type: 'Owner',
                  desc:
                    'A really simple package that enables you to specify an opacity for your HEX colours'
                }
              ].map(item => (
                <li
                  css={{ marginBottom: 16, listStyle: 'none' }}
                  key={item.name}
                >
                  <Card>
                    <div
                      css={{
                        ...text[1],
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <span
                        css={{
                          ...text[4],
                          color: 'white',
                          fontWeight: 500
                        }}
                      >
                        {item.name}
                      </span>
                      {item.team && (
                        <div
                          css={{
                            ...text[1],
                            padding: '3px 6px',
                            border: `1px solid ${colors.purple}`,
                            marginLeft: 6,
                            backgroundColor: hexAlpha(colors.purple, 0.1),
                            borderRadius: borderRadius.sm,
                            color: colors.purple
                          }}
                        >
                          Team
                        </div>
                      )}
                      {item.openSource && (
                        <div
                          css={{
                            ...text[1],
                            padding: '3px 6px',
                            border: `1px solid ${colors.green}`,
                            marginLeft: 6,
                            backgroundColor: hexAlpha(colors.green, 0.1),
                            borderRadius: borderRadius.sm,
                            color: colors.green
                          }}
                        >
                          Open Source
                        </div>
                      )}
                    </div>
                    <p
                      css={{
                        ...text[2],
                        margin: '10px 0',
                        color: colors.slate[90]
                      }}
                      x
                    >
                      {item.desc}
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See more
                    </a>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Block>

      <Block>
        <Dribbble />
      </Block>

      <Contact />
    </main>
  </Layout>
);

export const portfolioQuery = graphql`
  query IndexProjects {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            imagesrc
            type
          }
        }
      }
    }
  }
`;

const Block = ({ children }) => (
  <div css={{ margin: '128px auto' }}>{children}</div>
);

export default App;
