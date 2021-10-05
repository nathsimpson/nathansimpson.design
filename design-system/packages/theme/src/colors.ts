const palette = {
  brand: '#fa6d01',
  decorative: {
    green: '#52e409',
    purple: '#E509E3',
    blue: '#089aef'
  }
};

const darkNeutrals = {
  neutral0: '#0c0f13',
  neutral10: '#13181d',
  neutral20: '#171d22',
  neutral30: '#1e242a',
  neutral40: '#272f37',
  neutral50: '#353f47',
  neutral60: '#48535d',
  neutral70: '#616e79',
  neutral80: '#808d99',
  neutral90: '#a0aeba',
  neutral100: '#ffffff'
};

const lightNeutrals = {
  neutral0: '#0c0f13',
  neutral10: '#272f37',
  neutral20: '#353f47',
  neutral30: '#48535d',
  neutral40: '#616e79',
  neutral50: '#808d99',
  neutral60: '#a0aeba',
  neutral70: '#c1c7cd',
  neutral80: '#dde1e6',
  neutral90: '#f2f4f8',
  neutral100: '#ffffff'
};

export const darkColors = {
  global: {
    brand: palette.brand,
    border: darkNeutrals.neutral50,
    shadow: darkNeutrals.neutral0
  },
  text: {
    default: darkNeutrals.neutral90,
    emphasis: darkNeutrals.neutral100,
    link: palette.brand,
    linkHover: darkNeutrals.neutral100
  },
  background: {
    default: darkNeutrals.neutral10,
    emphasis: darkNeutrals.neutral30,
    hover: darkNeutrals.neutral40
  },
  input: {
    background: darkNeutrals.neutral40,
    backgroundHover: darkNeutrals.neutral50,
    backgroundActive: darkNeutrals.neutral30,
    foreground: darkNeutrals.neutral90,
    foregroundHover: darkNeutrals.neutral100,
    foregroundActive: darkNeutrals.neutral100
  },
  decorative: palette.decorative
};

export const lightColors = {
  global: {
    brand: palette.brand,
    border: lightNeutrals.neutral70,
    shadow: lightNeutrals.neutral70
  },
  text: {
    default: lightNeutrals.neutral40,
    emphasis: lightNeutrals.neutral0,
    link: palette.brand,
    linkHover: lightNeutrals.neutral0
  },
  background: {
    default: lightNeutrals.neutral90,
    emphasis: lightNeutrals.neutral100,
    hover: lightNeutrals.neutral80
  },
  input: {
    background: lightNeutrals.neutral40,
    backgroundHover: lightNeutrals.neutral50,
    backgroundActive: lightNeutrals.neutral30,
    foreground: lightNeutrals.neutral90,
    foregroundHover: lightNeutrals.neutral100,
    foregroundActive: lightNeutrals.neutral100
  },
  decorative: palette.decorative
};
