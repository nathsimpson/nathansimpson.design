---
title: Stack
path: '/design-system/stack'
type: design-system
section: layout
---

# Stack

Stack component is a core layout component that enables uniform spacing between children.

```jsx
import { Stack } from 'design-system/stack';
```

## Gap

The gap prop expects any of our theme spacing tokens.

```jsx live
<Stack gap="small">
  <Box bg="emphasis" padding="small" width={50} height={50}>
    <Text>1</Text>
  </Box>

  <Box bg="emphasis" padding="small" width={50} height={50}>
    <Text>2</Text>
  </Box>

  <Box bg="emphasis" padding="small" width={50} height={50}>
    <Text>3</Text>
  </Box>
</Stack>
```

## Orientation

Orientation changes the direction of the Stack.

```jsx live
<Stack orientation="horizontal" gap="small">
  <Box bg="emphasis" padding="small" width={50} height={50}>
    <Text>1</Text>
  </Box>

  <Box bg="emphasis" padding="small" width={50} height={50}>
    <Text>2</Text>
  </Box>

  <Box bg="emphasis" padding="small" width={50} height={50}>
    <Text>3</Text>
  </Box>
</Stack>
```
