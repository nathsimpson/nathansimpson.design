// @jsx jsx
import React from "react";
import Layout from "../templates/layout";
import { jsx, css } from "@emotion/core";

import Helmet from "react-helmet";
import { ContactForm } from "../components";

export default () => (
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
      <h1>Talks</h1>
      <ContactForm />
    </main>
  </Layout>
);
