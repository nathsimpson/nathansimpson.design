---
title: Tag
path: '/design-system/tag'
type: design-system
---

# Tag

Tags are used to label, categorise or classify items using keywords that describe them.

```jsx
import { Tag } from 'design-system/tag';
```

```jsx live
<Tag label="Tag" size="medium" />
```

A Tag will always capitalise the first letter in the label.

Tag comes in two sizes...

- small
- medium

There are three colors to choose from...

- default
- brand
- blue
- green
- purple

```jsx live
<Cluster gap="small">
  <Tag label="default" color="default" />
  <Tag label="brand" color="brand" />
  <Tag label="blue" color="blue" />
  <Tag label="green" color="green" />
  <Tag label="purple" color="purple" />
</Cluster>
```
