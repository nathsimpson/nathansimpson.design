import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Highlight, { defaultProps } from 'prism-react-renderer';

import { Box } from './ui/box';
import { useTheme } from '../lib/theme';
import { useCodeHighlightTheme } from './codeHighlightTheme';

export const StaticCode = ({ className = '', children }) => {
  const matches = className.match(/language-(?<lang>.*)/);
  const { colors } = useTheme();
  const codeTheme = useCodeHighlightTheme();

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      theme={codeTheme}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ''
      }
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box
          as="pre"
          padding="medium"
          rounding="medium"
          className={className}
          style={{
            margin: 0,
            border: `1px solid ${colors.border}`,
            ...style
          }}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} key={i}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} key={key} />
              ))}
            </div>
          ))}
        </Box>
      )}
    </Highlight>
  );
};

export const CodeEditor = ({ children, components }) => {
  const { colors, radii, spacing } = useTheme();
  const codeTheme = useCodeHighlightTheme();

  return (
    <div
      css={{
        border: `1px solid ${colors.border}`,
        borderRadius: radii.medium
      }}
    >
      <LiveProvider code={children} scope={components}>
        <div
          css={{
            padding: spacing.medium,
            whiteSpace: 'normal'
          }}
        >
          <LivePreview />
        </div>
        <LiveError />
        <LiveEditor theme={codeTheme} />
      </LiveProvider>
    </div>
  );
};
