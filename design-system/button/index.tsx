/** @jsx jsx */
import { jsx } from '@emotion/core';

import { useButtonStyles, ButtonProps } from './utils';

export const Button = ({
  label,
  size = 'medium',
  weight = 'primary',
  ...props
}: ButtonProps & {
  onPress: () => void;
}) => {
  const styles = useButtonStyles({ size, weight });

  return (
    <button css={styles} type="button" {...props}>
      {label}
    </button>
  );
};

export const LinkButton = ({
  label,
  size = 'medium',
  weight = 'primary'
}: ButtonProps & {
  href: 'string';
}) => {
  const styles = useButtonStyles({ size, weight });
  return <a css={styles}>{label}</a>;
};
