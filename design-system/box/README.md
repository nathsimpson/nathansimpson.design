---
title: Box
path: '/design-system/box'
type: design-system
section: layout
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

## Responsive props

Styles that differ across screen sizes can be expressed as responsive props. This array syntax is read mobile-first.

```jsx live
<Box bg="emphasis" padding={['small', 'medium']} rounding={['small', 'large']}>
  <Text as="span">Hello</Text>
</Box>
```
