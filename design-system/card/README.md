---
title: Card
path: '/design-system/card'
type: design-system
---

# Card

Card is used to link to site content like projects or blog posts.

Typically Cards are tiled together, using the Tiles component.

Cards can appear with or without images. If no image is provided, the desciption text will be visible instead.

```jsx
import { Card, useCardStyles } from 'design-system/card';
```

```jsx live
<Tiles>
  <Card
    title="Test"
    tag="Design"
    path="/"
    image="https://files.nathansimpson.design/portfolio/simmo/cover.jpg"
  />
  <Card
    title="hexAlpha"
    path="/"
    tag="Development"
    desc="A really simple package that enables you to specify an opacity for your HEX colours."
  />
</Tiles>
```

## Props

| Prop   | Options                  | Desc                                                          |
| ------ | ------------------------ | ------------------------------------------------------------- |
| desc?  | string                   | The description will only be visible if no image is provided. |
| image? | string                   | Image url                                                     |
| path   | string                   | Link to a Gatsby page                                         |
| tag    | 'Design' , 'Development' |                                                               |
| title  | string                   |                                                               |

## useCardStyles

The useCardStyles hook is available if you want to decorate an element with the same styles as the Card component's container.

```jsx
const styles = useCardStyles();

const Element = () => <div style={styles}>Using Card Styles</div>;
```
