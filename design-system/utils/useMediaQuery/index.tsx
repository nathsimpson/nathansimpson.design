import facepaint from 'facepaint';
import { breakpoints, useTheme } from '@nathsimpson/theme';

type BreakPoints = typeof breakpoints;
type BreakPoint = keyof BreakPoints;

const maxWidth = (width: number, m = true) =>
  `${m ? '@media ' : ''}(max-width: ${width}px)`;

const minWidth = (width: number, m = true) =>
  `${m ? '@media ' : ''}(min-width: ${width}px)`;

/*
  Array Syntax for Breakpoints
  More here: https://github.com/emotion-js/facepaint
  ------------------------------
  <div css={mq({
    fontSize: [14, 16],
    width: ['12rem', '24rem', '36rem', '48rem'],
  })} />
*/
const makeMq = (breakpoints: BreakPoints) => {
  const bps = Object.values(breakpoints);
  return facepaint(bps.map(value => minWidth(value)));
};

// helper if array property declaration isn't appropriate.
const makeMinBreak = (breakpoints: BreakPoints) => (key: BreakPoint) => {
  return minWidth(breakpoints[key]);
};

// The breakpoints are designed to go up i.e. min-width
// if a max-width is necessary (hopefully rare) it's nice to provide a helper
const makeMaxBreak = (breakpoints: BreakPoints) => (key: BreakPoint) => {
  return maxWidth(breakpoints[key] - 1);
};

export const useMediaQuery = () => {
  const { breakpoints } = useTheme();
  return {
    mq: makeMq(breakpoints),
    maxBreak: makeMaxBreak(breakpoints),
    minBreak: makeMinBreak(breakpoints)
  };
};
