// palette
const brand = '#fa6d01';
const neutral025 = '#0d0d0e';
const neutral050 = '#13181d';
const neutral100 = '#272f37';
const neutral200 = '#353f47';
const neutral300 = '#48535d';
const neutral400 = '#616e79';
const neutral500 = '#808d99';
const neutral600 = '#a0aeba';
const neutral700 = '#c1c7cd';
// const neutral80 = '#dde1e6';
const neutral900 = '#f2f4f8';
const white = '#ffffff';

export const darkColors = {
  brand: brand,
  action: brand,
  border: neutral200,
  shadow: neutral025,
  text: {
    default: white,
    muted: neutral600,
    emphasis: white,
    link: brand,
    linkSecondary: white,
    linkHover: white
  },
  background: {
    default: neutral050,
    emphasis: neutral100,
    hover: neutral200
  },
  input: {
    background: neutral100,
    backgroundHover: neutral200,
    backgroundActive: '#262a32',
    foreground: neutral600,
    foregroundHover: white,
    foregroundActive: white
  }
};

export const lightColors = {
  brand: brand,
  action: brand,
  border: neutral700,
  shadow: neutral700,
  text: {
    default: neutral025,
    muted: neutral400,
    emphasis: neutral025,
    link: brand,
    linkSecondary: neutral025,
    linkHover: neutral025
  },
  background: {
    default: neutral900,
    emphasis: white,
    hover: neutral700
  },
  input: {
    background: neutral400,
    backgroundHover: neutral500,
    backgroundActive: neutral300,
    foreground: neutral900,
    foregroundHover: white,
    foregroundActive: white
  }
};
