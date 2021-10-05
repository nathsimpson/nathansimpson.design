---
title: Typography
path: '/design-system/typography'
type: design-system
---

# Typography

`<Heading>` and `<Text>` components for all your typography needs

```jsx
import { Heading, Text } from 'design-system/typography';
```

## Text

Text component is used for all body text in the app. It includes our body font family, and exposes props for font size, weight and color.

```jsx live
<Stack gap="small">
  <Text token="code-xs">XSmall</Text>
  <Text token="code-sm">XSmall</Text>
  <Text token="xsmall">XSmall</Text>
  <Text token="small">Small</Text>
  <Text token="medium">Medium</Text>
  <Text token="large">Large</Text>
  <Text token="xlarge">XLarge</Text>
</Stack>
```

| Prop     | Options                | Default   |
| -------- | ---------------------- | --------- |
| as?      | `p` ,`span`            | `p`       |
| children | string                 |           |
| color?   | `default` , `emphasis` | `default` |
| size?    | SizingType             | `medium`  |

## Heading

Used for all headings in the app. It exposes a prop for 'level', as well the same utility props from Box.

```jsx live
<Stack gap="small">
  <Heading level={1}>Heading One</Heading>
  <Heading level={2}>Heading Two</Heading>
  <Heading level={3}>Heading Three</Heading>
  <Heading level={4}>Heading Four</Heading>
  <Heading level={5}>Heading Five</Heading>
  <Heading level={6}>Heading Six</Heading>
</Stack>
```

| Prop     | Options     | Default |
| -------- | ----------- | ------- |
| children | string      |         |
| level?   | 1,2,3,4,5,6 | 1       |
