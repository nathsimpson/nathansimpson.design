/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { colors, borderRadius, boxShadow } from "../../theme";

const Card = ({ children }) => (
  <div
    css={{
      ...boxShadow[1],
      background: colors.slate[30],
      padding: "16px 24px",
      borderRadius: borderRadius.lg
    }}
  >
    {children}
  </div>
);

export default Card;
