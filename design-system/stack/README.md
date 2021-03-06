---
title: Stack
path: '/design-system/stack'
type: design-system
---

# Stack

Stack component is a core layout component that enables uniform spacing between children.

```jsx
import { Stack } from 'design-system/stack';
```

The gap prop expects any of our theme spacing tokens.

```jsx live
<Stack gap="small">
  <Card>
    <p>Card in a Stack.</p>
  </Card>

  <Card>
    <p>Card in a Stack.</p>
  </Card>

  <Card>
    <p>Card in a Stack.</p>
  </Card>
</Stack>
```
