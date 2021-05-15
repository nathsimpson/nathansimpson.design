export const palette = {
  orange: '#fa6d01',
  green: '#52e409',
  purple: '#E509E3',
  blue: '#089aef'
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

const primary = palette.orange;

export const colors = {
  brand: palette.orange,
  brandSecondary: darkNeutrals.neutral100,
  link: palette.orange,
  linkHover: darkNeutrals.neutral100,
  background: darkNeutrals.neutral10,
  backgroundEmphasis: darkNeutrals.neutral30,
  backgroundHover: darkNeutrals.neutral40,
  shadow: darkNeutrals.neutral0,
  border: darkNeutrals.neutral50,
  foregroundEmphasis: darkNeutrals.neutral100,
  foreground: darkNeutrals.neutral90,
  decorative: {
    green: palette.green,
    purple: palette.purple,
    blue: palette.blue
  },
  input: {
    background: darkNeutrals.neutral40,
    foreground: darkNeutrals.neutral90,
    hover: {
      background: darkNeutrals.neutral50,
      foreground: darkNeutrals.neutral100
    },
    active: {
      background: darkNeutrals.neutral30,
      foreground: darkNeutrals.neutral100
    }
  }
};

export const darkColors = {
  global: {
    brand: palette.orange,
    border: darkNeutrals.neutral50,
    shadow: darkNeutrals.neutral0
  },
  text: {
    default: darkNeutrals.neutral90,
    emphasis: darkNeutrals.neutral100,
    link: primary,
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
  decorative: [palette.green, palette.purple, palette.blue]
};

export const lightColors = {
  global: {
    brand: palette.orange,
    border: lightNeutrals.neutral70,
    shadow: lightNeutrals.neutral70
  },
  text: {
    default: lightNeutrals.neutral40,
    emphasis: lightNeutrals.neutral0,
    link: primary,
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
  decorative: [palette.green, palette.purple, palette.blue]
};
