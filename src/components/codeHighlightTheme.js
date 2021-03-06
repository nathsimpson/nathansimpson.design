import { colors } from '../../design-system/theme';

// Original: https://github.com/dracula/visual-studio-code
// Converted automatically using ./tools/themeFromVsCode
export const codeHighlightTheme = {
  plain: {
    color: '#F8F8F2',
    backgroundColor: colors.backgroundEmphasis
  },
  styles: [
    {
      types: ['prolog', 'constant', 'builtin'],
      style: {
        color: 'rgb(189, 147, 249)'
      }
    },
    {
      types: ['inserted', 'function'],
      style: {
        color: 'rgb(80, 250, 123)'
      }
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)'
      }
    },
    {
      types: ['changed'],
      style: {
        color: 'rgb(255, 184, 108)'
      }
    },
    {
      types: ['punctuation', 'symbol'],
      style: {
        color: colors.foreground
      }
    },
    {
      types: ['string', 'char', 'tag', 'selector'],
      style: {
        color: colors.brand
      }
    },
    {
      types: ['keyword', 'variable'],
      style: {
        color: 'rgb(189, 147, 249)',
        fontStyle: 'italic'
      }
    },
    {
      types: ['comment'],
      style: {
        color: colors.foreground
      }
    },
    {
      types: ['attr-name'],
      style: {
        color: colors.foregroundEmphasis
      }
    }
  ]
};
