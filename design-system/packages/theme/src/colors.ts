// palette
const brand = '#fa6d01';
const neutral0 = '#0d0d0e';
const neutral10 = '#272f37';
const neutral20 = '#353f47';
const neutral30 = '#48535d';
const neutral40 = '#616e79';
const neutral50 = '#808d99';
const neutral60 = '#a0aeba';
const neutral70 = '#c1c7cd';
// const neutral80 = '#dde1e6';
const neutral90 = '#f2f4f8';
const neutral100 = '#ffffff';

export const darkColors = {
  brand: brand,
  action: brand,
  actionSecondary: neutral100,
  border: neutral20,
  shadow: neutral0,
  text: {
    default: neutral60,
    emphasis: neutral100,
    link: brand,
    linkSecondary: neutral100,
    linkHover: neutral100
  },
  background: {
    default: neutral0,
    emphasis: '#262a32',
    hover: neutral10
  },
  input: {
    background: neutral10,
    backgroundHover: neutral20,
    backgroundActive: '#262a32',
    foreground: neutral60,
    foregroundHover: neutral100,
    foregroundActive: neutral100
  }
};

export const lightColors = {
  brand: brand,
  action: brand,
  actionSecondary: neutral0,
  border: neutral70,
  shadow: neutral70,
  text: {
    default: neutral40,
    emphasis: neutral0,
    link: brand,
    linkSecondary: neutral0,
    linkHover: neutral0
  },
  background: {
    default: neutral90,
    emphasis: neutral100,
    hover: neutral70
  },
  input: {
    background: neutral40,
    backgroundHover: neutral50,
    backgroundActive: neutral30,
    foreground: neutral90,
    foregroundHover: neutral100,
    foregroundActive: neutral100
  }
};
