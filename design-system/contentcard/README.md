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
    title="The Design System Manifesto"
    path="/"
    tag="Development"
    desc="Enables small businesses to conveniently do Payroll and STP reporting from an browser or mobile device."
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
