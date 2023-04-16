---
title: TextLink
path: '/design-system/textlink'
type: design-system
---

# Textlink

A stylised wrapper over the standard HTML anchor attribute.

```jsx
import { TextLink } from '../TextLink';
```

TextLink will adopt it's parent's font size, unless one is specified.

```jsx live
<Text size="small">
  Click <TextLink href="#">here</TextLink> to learn more.
</Text>
```

## TextGatsbyLink

Identical to TextLink, but is based on the Link component from Gatsby.

```jsx live
<Text size="small">
  Click
  <TextLinkGatsby href="/">here</TextLinkGatsby> to go home.
</Text>
```
