import hexAlpha from "hex-alpha";

export const colors = {
  orange: "#fa6d01",
  slate: {
    "0": "#0c0f13",
    "10": "#13181d",
    "20": "#171d22",
    "30": "#1e242a",
    "40": "#272f37",
    "50": "#353f47",
    "60": "#48535d",
    "70": "#616e79",
    "80": "#808d99",
    "90": "#a0aeba"
  },
  green: "#52e409",
  purple: "#E509E3",
  thinkmill: "#FF3838"
};

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
};

export const borderRadius = {
  sm: "3px",
  md: "6px",
  lg: "12px"
};

export const boxShadow = {
  1: {
    boxShadow: `0px 6px 12px ${colors.slate[0]}`
  }
};

export const text = {
  1: {
    fontSize: 12,
    lineHeight: 1.4
  },
  2: {
    fontSize: 16,
    lineHeight: 1.4
  },
  3: {
    fontSize: 18,
    lineHeight: 1.4
  },
  4: {
    fontSize: 20,
    lineHeight: 1.4
  },
  5: {
    fontSize: 24,
    lineHeight: 1.4
  },
  6: {
    fontSize: 40,
    lineHeight: 1.4
  },
  7: {
    fontSize: 70,
    lineHeight: 1.4
  }
};

export const headings = {
  1: {
    ...text[7],
    color: "white",
    margin: "12px 0",
    fontWeight: 900
  },
  2: {
    ...text[6],
    color: "white",
    margin: "12px 0",
    fontWeight: 800
  },
  3: {
    ...text[5],
    color: "white",
    margin: "12px 0",
    fontWeight: 600
  },
  4: {
    ...text[4],
    color: "white",
    margin: "12px 0",
    fontWeight: 600
  }
};
