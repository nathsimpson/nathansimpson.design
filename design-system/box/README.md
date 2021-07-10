---
title: Box
path: '/design-system/box'
type: design-system
---

# Box

Box is the most fundamental layout component, which most of the other components are based on.
Box provides convenient utility props for common styles, using our [design tokens](tokens). These include props for...

- Margin
- Padding
- Rounding (border radius)
- Background color

```jsx
import { Box } from 'design-system/box';
```

```jsx live
<Box bg="emphasis" padding="medium" marginLeft="large" rounding="medium">
  <Text as="span">Hello</Text>
</Box>
```

## As Prop

Using the As prop, you specify the HTML tag to be rendered. `div` is the default.

```jsx live
<Box as="section">
  <Text as="span">I'm in a Section</Text>
</Box>
```
