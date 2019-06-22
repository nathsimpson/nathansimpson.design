// @jsx jsx
import React from "react";
import Layout from "../templates/layout";
import { jsx, css } from "@emotion/core";

import Helmet from "react-helmet";
import Portfolio from "../components/Portfolio";
import { Card, ContactForm } from "../components";
import Dribbble from "../components/Dribbble";
import { colors, borderRadius, text } from "../theme";
import hexAlpha from "hex-alpha";

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
        style={{
          display: "flex",
          minHeight: "60vh",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <h1 style={{ margin: 0 }}>Nathan Simpson</h1>

        <p
          style={{
            margin: 0,
            maxWidth: 600
          }}
        >
          Designer &amp; Frontend Developer at{" "}
          <a href="https://thinkmill.com.au">Thinkmill</a> in Sydney, Australia.
          Passionate about building products from concept to delivery.
        </p>
      </div>

      <h2>Design Projects</h2>
      <Portfolio data={data} />

      <Block>
        <h2>Development</h2>

        <div css={{ display: "flex" }}>
          <div css={{ flex: 1 }}>
            <p>Some text here</p>
            <div>
              <h3>Experienced with</h3>
              <ul
                css={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexWrap: "wrap"
                }}
              >
                {[
                  "JavaScript",
                  "React",
                  "React Native",
                  "NextJS",
                  "Gatsby",
                  "NodeJS",
                  "Keystone"
                ].map(item => (
                  <li
                    css={{
                      padding: "4px 8px",
                      border: `1px solid ${colors.orange}`,
                      marginRight: 6,
                      marginBottom: 6,
                      color: colors.orange,
                      backgroundColor: hexAlpha(colors.orange, 0.2),
                      borderRadius: borderRadius.sm
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div css={{ flex: 1 }}>
            <div>
              <h3>Some things I've built</h3>
              <ul css={{ padding: 0 }}>
                {[
                  {
                    name: "The Garage",
                    link: "https://thegarageapp.com",
                    type: "Owner",
                    desc:
                      "The Garage is an social network for car lovers in Sydney Australia."
                  },
                  {
                    name: "KeystoneJS",
                    link:
                      "https://github.com/keystonejs/keystone-5/graphs/contributors",
                    type: "Contributor",
                    openSource: true,
                    desc:
                      "KeystoneJS is a scalable platform and CMS for Node.js applications. `schema => ({ GraphQL, AdminUI })`"
                  },
                  {
                    name: "IsobelJS",
                    openSource: true,
                    link: "https://isobeljs.com/",
                    type: "Owner",
                    desc:
                      "A beginner-friendly NodeJS framework for fetching data from your social profiles and other sources, to display in your own apps and websites."
                  },
                  {
                    name: "hex-alpha",
                    openSource: true,
                    link: "https://github.com/nathsimpson/hex-alpha",
                    type: "Owner",
                    desc:
                      "A really simple package that enables you to specify an opacity for your HEX colours"
                  }
                ].map(item => (
                  <li css={{ marginBottom: 16, listStyle: "none" }}>
                    <Card>
                      <div
                        css={{
                          ...text[1],
                          display: "flex",
                          alignItems: "center"
                        }}
                      >
                        <span
                          css={{
                            ...text[4],
                            color: "white",
                            fontWeight: 500
                          }}
                        >
                          {item.name}
                        </span>
                        <div
                          css={{
                            ...text[1],
                            padding: "3px 6px",
                            border: `1px solid ${colors.slate[40]}`,
                            marginLeft: 6,
                            backgroundColor: colors.slate[0],
                            borderRadius: borderRadius.sm
                          }}
                        >
                          {item.type}
                        </div>
                        {item.openSource && (
                          <div
                            css={{
                              ...text[1],
                              padding: "3px 6px",
                              border: `1px solid ${colors.green[10]}`,
                              marginLeft: 6,
                              backgroundColor: hexAlpha(colors.green[10], 0.1),
                              borderRadius: borderRadius.sm,
                              color: colors.green[10]
                            }}
                          >
                            Open Source
                          </div>
                        )}
                      </div>
                      <p
                        css={{
                          ...text[2],
                          margin: "10px 0",
                          color: colors.slate[90]
                        }}
                        x
                      >
                        {item.desc}
                      </p>
                      <a href={item.link} target="_blank">
                        See more
                      </a>
                    </Card>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Block>

      <Block>
        <Dribbble />
      </Block>

      <ContactForm />
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
            slug
            title
            imagesrc
          }
        }
      }
    }
  }
`;

const Block = ({ children }) => (
  <div css={{ margin: "128px auto" }}>{children}</div>
);

export default App;
