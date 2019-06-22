// @jsx jsx
import React from "react";
import { jsx, css, Global } from "@emotion/core";
import { Header, Footer } from "../components";
import { colors, text, headings } from "../theme";

export default ({ children }) => (
  <div
    style={{
      width: "100%",
      maxWidth: "1300px",
      padding: "0 16px",
      margin: "0 auto",
      boxSizing: "border-box"
    }}
  >
    <Global
      styles={{
        body: {
          ...text[3],
          margin: 0,
          padding: 0,
          fontFamily: '"SF Pro Display", sans-serif',
          color: colors.slate[90],
          backgroundColor: colors.slate[10]
        },

        a: {
          color: colors.orange,
          textDecoration: "none",

          "&:hover": {
            textDecoration: "underline"
          }
        },

        h1: headings[1],
        h2: headings[2],
        h3: headings[3],
        h4: headings[4],

        img: {
          maxWidth: "100%"
        },

        hr: {
          border: `1px solid ${colors.orange}`
        }
      }}
    />
    <Header />
    {children}
    <Footer />
  </div>
);
