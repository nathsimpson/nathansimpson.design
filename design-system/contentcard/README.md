---
title: ContentCard
path: '/design-system/ContentCard'
type: design-system
---

# ContentCard

ContentCard is used to link to site content like projects or blog posts.

Typically ContentCards are tiled together, using the Tiles component.

ContentCards can appear with or without images. If no image is provided, the desciption text will be visible instead.

```jsx live
<Tiles>
  <ContentCard
    title="Test"
    tag="Design"
    path="/"
    image="https://files.nathansimpson.design/portfolio/simmo/cover.jpg"
  />
  <ContentCard
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
