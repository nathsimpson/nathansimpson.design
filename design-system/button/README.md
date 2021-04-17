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
<Stack gap="small">
  <Button label="Submit" size="medium" weight="primary" />
  <Button label="Submit" size="medium" weight="secondary" />
</Stack>
```

## LinkButton

Shares the same styles as a Button, but works as an anchor link.

```jsx live
<Stack gap="small">
  <LinkButton href="#" label="Next" size="medium" weight="primary" />
  <LinkButton href="#" label="Next" size="medium" weight="secondary" />
</Stack>
```
