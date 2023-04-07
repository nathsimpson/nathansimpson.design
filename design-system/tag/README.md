---
title: Tag
path: '/design-system/tag'
type: design-system
---

# Tag

Tags are used to label, categorise or classify items using keywords that describe them.

```jsx
import { Tag } from '../tag';
```

```jsx live
<Tag label="Tag" size="medium" />
```

A Tag will always capitalise the first letter in the label.

Tag comes in two sizes...

- small
- medium

```jsx live
<Flex gap="small" alignItems="center">
  <Tag label="small" size="small" />
  <Tag label="medium" size="medium" />
</Flex>
```

## Tags

For conveience, we also have a 'Tags' component.

Tags uses 'small' size by default.

```jsx live
<Tags items={['Design Systems', 'User Experience', 'WCAG']} size="small" />
```
