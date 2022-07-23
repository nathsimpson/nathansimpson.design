---
title: Box
path: '/design-system/box'
type: design-system
section: layout
---

# Box

Box package exports `Box`, `Flex` and `Stack` primitive components.

```jsx
import { Box, Flex, Stack } from '@nathsimpson/box';
```

## Box

Box is the most fundamental layout component, which most of the other components are based on.
Box provides convenient utility props for common styles, using our [design tokens](tokens). These include props for...

- Margin
- Padding
- Rounding (border radius)
- Background color

```jsx live
<Box bg="emphasis" padding="medium" rounding="medium">
  <Text as="span">Box content</Text>
</Box>
```

### As Prop

Using the As prop, you specify the HTML tag to be rendered. `div` is the default.

```jsx live
<Box as="section">
  <Text as="span">I'm in a Section</Text>
</Box>
```

### Responsive props

Styles that differ across screen sizes can be expressed as responsive props. This array syntax is read mobile-first.

```jsx live
<Box bg="emphasis" padding={['small', 'medium']} rounding={['small', 'large']}>
  <Text as="span">Hello</Text>
</Box>
```

## Flex

Flex component extends Box with some handy flexbox utility props.

```jsx live
<Flex alignItems="center" justifyContent="space-between" width="100%">
  <Text>One</Text>
  <Text>Two</Text>
</Flex>
```

## Stack

Stack component 'stacks' children in a column, and enables uniform spacing between them.

The `gap` prop controls the amount of spacing, using any of our spacing tokens.

```jsx live
<Stack gap="small">
  <Flex
    bg="emphasis"
    alignItems="center"
    justifyContent="center"
    width={50}
    height={50}
  >
    <Text>1</Text>
  </Flex>

  <Flex
    bg="emphasis"
    alignItems="center"
    justifyContent="center"
    width={50}
    height={50}
  >
    <Text>2</Text>
  </Flex>

  <Flex
    bg="emphasis"
    alignItems="center"
    justifyContent="center"
    width={50}
    height={50}
  >
    <Text>3</Text>
  </Flex>
</Stack>
```
