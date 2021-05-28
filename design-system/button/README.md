---
title: Button
path: '/design-system/button'
type: design-system
---

# Button

```jsx
import { Button, LinkButton } from 'design-system/button';
```

## Button

```jsx live
<Stack gap="small" orientation="horizontal">
  <Button label="Primary" size="medium" weight="primary" />
  <Button label="Secondary" size="medium" weight="secondary" />
  <Button label="None" size="medium" weight="none" />
</Stack>
```

There are three button weights to choose from:
- primary
- secondary
- none

and three sizes...
- small
- medium
- large

### Icons
Buttons can include icons on the left or right sides.

```jsx live
<Stack gap="small" orientation="horizontal">
  <Button label="Create" size="medium" weight="primary" iconBefore="plus" />
  <Button
    label="Next"
    size="medium"
    weight="secondary"
    iconAfter="chevronRight"
  />
</Stack>
```

### Props

| Prop       | Type                           | Default   |
| ---------- | ------------------------------ | --------- |
| iconAfter  | IconType                       |           |
| iconBefore | IconType                       |           |
| label      | string                         |           |
| onPress    | () => void                     |           |
| size?      | `small`, `medium`, `large`     | `medium`  |
| weight     | `primary`, `secondary`, `none` | `primary` |

## LinkButton

Shares the same styles as a Button, but works as an anchor link.

```jsx live
<LinkButton href="#" label="Next" size="medium" weight="primary" />
```

### Props

| Prop       | Type                           | Default   |
| ---------- | ------------------------------ | --------- |
| href       | url string                     |           |
| iconAfter  | IconType                       |           |
| iconBefore | IconType                       |           |
| label      | string                         |           |
| size?      | `small`, `medium`, `large`     | `medium`  |
| weight     | `primary`, `secondary`, `none` | `primary` |
