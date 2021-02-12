export const palette = {
  orange: '#fa6d01',
  green: '#52e409',
  purple: '#E509E3',
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

export const colors = {
  brand: palette.orange,
  brandSecondary: palette.neutral100,
  link: palette.orange,
  linkHover: palette.neutral100,
  background: palette.neutral10,
  backgroundEmphasis: palette.neutral30,
  shadow: palette.neutral0,
  border: palette.neutral50,
  foregroundEmphasis: palette.neutral100,
  foreground: palette.neutral90,
  input: {
    background: palette.neutral40,
    foreground: palette.neutral90,
    hover: {
      background: palette.neutral50,
      foreground: palette.neutral100
    },
    active: {
      background: palette.neutral30,
      foreground: palette.neutral100
    }
  }
};
