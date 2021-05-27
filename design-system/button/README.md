---
title: Button
path: '/design-system/button'
type: design-system
---

# Button

```jsx
import { Button, LinkButton } from 'design-system/button';
```

```jsx live
<Stack gap="small" orientation="horizontal">
  <Button label="Submit" size="medium" weight="primary" />
  <Button label="Submit" size="medium" weight="secondary" />
  <Button label="Submit" size="medium" weight="none" />
</Stack>
```

## Icons

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

## LinkButton

Shares the same styles as a Button, but works as an anchor link.

```jsx live
<Stack gap="small" orientation="horizontal">
  <LinkButton href="#" label="Next" size="medium" weight="primary" />
  <LinkButton href="#" label="Next" size="medium" weight="secondary" />
</Stack>
```
