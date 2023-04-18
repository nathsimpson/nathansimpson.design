import { getContrastColor, getWcagScore } from 'hex-a11y';
import { Stack } from '../../../components/ui/box';
import { useTheme } from '../useTheme';
import { spacing } from '../index';

export const ColorsExample = () => {
  // const { colors } = useTheme();
  const colorsArr: { label: string; value: string }[] = [];
  // TODO: fix this
  // const generateCards = ({
  //   parent = '',
  //   value
  // }: {
  //   parent?: string;
  //   value: object;
  // }) =>
  //   Object.keys(value).forEach((c) => {
  //     const val = value[c];
  //     if (typeof val === 'string') {
  //       colorsArr.push({ label: `${parent}.${c}`, value: val });
  //     } else {
  //       generateCards({ parent: `${parent}.${c}`, value: val });
  //     }
  //   });

  // generateCards({ value: colors });

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        width: '100%',
        gap: spacing.small
      }}
    >
      {colorsArr.map((c) => (
        <Color {...c} key={c.label} />
      ))}
    </div>
  );
};

const Color = ({ label, value }: { label: string; value: string }) => {
  const { colors, fontSizes } = useTheme();
  const wcagText = getContrastColor(value);

  return (
    <div
      style={{
        border: `1px solid ${colors.border}`,
        width: '100%',
        backgroundColor: value,
        color: wcagText,
        boxSizing: 'border-box'
      }}
    >
      <Stack gap="xsmall" padding="medium">
        <span css={{ fontWeight: 600 }}>{label}</span>
        <span css={{ fontSize: fontSizes.small }}>{value.toString()}</span>
        <div>
          <span css={{ color: colors.text.default }}>
            {getWcagScore(value, colors.text.default)}
          </span>{' '}
          <span css={{ color: colors.text.default }}>
            {getWcagScore(value, colors.text.default)}
          </span>{' '}
          <span css={{ color: wcagText }}>{getWcagScore(value, wcagText)}</span>
        </div>
      </Stack>
    </div>
  );
};
