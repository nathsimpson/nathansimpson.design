---
title: Box
path: '/design-system/box'
type: design-system
---

# Box

Box is a layout component that provides convenient APIs of design tokens for...

- Margin
- Padding
- Radii (border radius)
- Background colors

```jsx
import { Box } from 'design-system/box';
```

```jsx live
<Box bg="emphasis" padding="medium">
  <Text as="span">Hello</Text>
</Box>
```

Box is compatible with semantic HTMl tags...

```jsx live
<Box as="section">
  <Text as="span">I'm in a Section</Text>
</Box>
```
