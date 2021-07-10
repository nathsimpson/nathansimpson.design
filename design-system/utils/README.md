---
title: Utils
path: '/design-system/utils'
type: design-system
section: hooks
---

# Utils
```jsx
import { forwardRefWithAs, hexAlpha, useMediaQuery} from 'utils';
```


## forwardRefWithAs

Allows us to use `React.forwardRef` while keeping the correct component type, which can be specified by the `as` prop.
```jsx
export const Box = forwardRefWithAs<'div', BoxProps>(
  (props, ref) => {
    return(
      ...
    )
  }
);
```

## hexAlpha
Enables you to specify an opacity for your HEX colours. Re-exported from the [hex-alpha](https://github.com/nathsimpson/hex-alpha) package.

```js
hexAlpha("#fa6d01", 0.1);
// returns "rgba(250,109,1,0.1)"
```

## useMediaQuery
Convenient css-in-js functions for using media queries in layouts.

See more info at the [useMediaQuery docs](usemediaquery).

```jsx
const { mq, maxBreak, minBreak } = useMediaQuery();
```
