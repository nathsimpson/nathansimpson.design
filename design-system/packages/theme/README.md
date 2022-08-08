---
title: Design Tokens
path: '/design-system/tokens'
type: design-system
---

import { ColorsExample } from './examples/colors';
import { RadiiExample } from './examples/radii';
import { SpacingExample } from './examples/spacing';

# Design Tokens

A collection of core design tokens for the design system.

- Colors
- Spacing
- Radii
- breakpoints
- boxShadow
- fontSizes
- fontFamilies

The best way to consume these tokens is through utility props, like the ones in [Box](box). Otherwise you can make use of the [useTheme](usetheme) hook.

## Colors

Our colours are named with semantic meaning in mind.

```jsx
const { colors } = useTheme();
```

<ColorsExample />

---

## Spacing

Tokens used for consistent margin or padding between elements.

The best way to consume these tokens is through `<Box />` and other layout components, though they can be imported if needed.

```jsx
const { spacing } = useTheme();
```

<SpacingExample />

---

## Radii

Tokens used for border radius.

Radii can be used through utility props in `<Box />` component.

```jsx
const { radii } = useTheme();
```

<RadiiExample />

---

## breakpoints

```jsx
const { breakpoints } = useTheme();
```

| Token | Width | Notes           |
| ----- | ----- | --------------- |
| sm    | 640   | for Mobile      |
| md    | 768   | for Tablet      |
| lg    | 1024  | for Desktop     |
| xl    | 1280  | for wide screen |

---

## boxShadow

```jsx
const { boxShadow } = useTheme();
```

---

## fontSizes

```jsx
const { fontSizes } = useTheme();
```

---

## fontFamilies

We use two font family groups across the site.

- heading
- body

The best way to consume these tokens is through `<Text />` and `<Heading />` components.
