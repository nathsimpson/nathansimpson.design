import { breakpoints } from "../theme";

// Media queries getter
export const getBreakpoints = () => {
  return Object.values(breakpoints).map(bp => `@media (min-width: ${bp}px)`);
};
