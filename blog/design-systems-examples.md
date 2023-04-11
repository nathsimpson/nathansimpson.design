---
title: Design System examples and resources
date: '2020-11-09'
updated: '2020-11-12'
type: Post
---

A Design System defines the language and building blocks of an organisation's digital experiences. It is primarily used by designers and developers, and aims to bridge the two professions.

Through working with Design Systems over the last few years, I've grown a list of some helpful resources, tools and examples. I keep this list updated so come back soon, ya hear!

## Examples

Here is a list of fantastic Design Systems that I reference and admire.

### Fluent UI by Microsoft

[Fluent UI ](https://developer.microsoft.com/en-us/fluentui#) is Microsoft's Design System for cross-platform applications, such a Office 365. There are multiple component libraries which implement the Fluent design language for React, Native and React Native experiences.

The launch of Fluent included [a really snazzy video](https://www.youtube.com/watch?v=miM6mBAfA8g), as well as [an article from The Verge](https://www.theverge.com/2019/12/5/20996748/microsoft-fluent-design-mobile-office-apps-new-updates-features).

### Encore by Spotify

Encore is a really interesting take on Design Systems, because it's not one design system, but a heirachy of Design Systems from global to product level. Unfortunately the websites aren't public, but [there is a fantastic article on their website](https://spotify.design/article/reimagining-design-systems-at-spotify), as well as some talks on YouTube.

### Balance by Reckon

What? I can't take inpiration from a Design System I worked on?

### ChakraUI

Personally, I think the best design systems aren't the ones built for the masses, but the opinionated ones built for purpose by a company. Still, if you need to reference some high-quality components, [ChakraUI](https://chakra-ui.com/getting-started) is not bad at all.

### Design Systems for Figma

[A collection](https://www.designsystemsforfigma.com/) of some fantastic Design System Figma files.

### More

- [Primer by GitHub](https://primer.style/)
- [Braid by Seek](https://seek-oss.github.io/braid-design-system/)
- [Atlassian Design System](https://atlassian.design/)
- [The Australian Government Design System](https://designsystem.gov.au/)
- [Carbon by IBM](https://www.carbondesignsystem.com/components/overview)
- [Lightning by Salesforce](https://www.lightningdesignsystem.com/)
- [Audi brand](https://www.audi.com/ci/en/renewed-brand.html)
- [Goldman Sachs](https://design.gs.com/home)

---

## Tools

Some of the must-have tools for anyone building a Design System.

### Figma

If you're designing a Design System, [Figma](https://www.figma.com/) is the go-to design tool. Not only is it collaborative thanks to it being cloud-based, but you can define symbols (and variants of them) that can be used across files - perfect for product design teams. The plugin library is also full of useful enhancements.

Check out [Design Systems for Figma](https://www.designsystemsforfigma.com/) if you're ever looking for some great examples.

### StoryBook

[Storybook](https://storybook.js.org/) is the current favourite framework for documenting your component library. By writing 'stories' for each component you can display all of the variants of a component, it's props and the API for how to use it. On top of that, Storybook offers visual testing tools and services, as well as collaboration tools if you deploy to their cloud.

### Docz

[Docz](https://www.docz.site/) is another great framework for building a documentation site for your component library. Each page is generated using `.mdx` files - Markdown with JSX flavouring. My one complaint about it is that the process for building a custom theme for Docz was not well documented. Still, if you want to build a pretty decent documentation site without much time, Docz is a safe bet.

### Playroom by Seek

[Playroom](https://github.com/seek-oss/playroom) is a wonderful code-oriented design environment where you can use your Design System components to see how layouts will look on a variety of screen sizes. It can be deployed alongside your existing design system documentation.

It's great for developers to quickly build a layout without having to spin-up a dev environment, or for designers interested in getting their hands dirty with code.

![Playroom in action](https://raw.githubusercontent.com/seek-oss/playroom/master/images/demo.gif)

### Contrast

Contrast is a sleek macOS menubar app for quick access to WCAG color contrast ratios. I use it very reguarly while designing interfaces or design systems. I am quite a big fan of it's creators, [Matt D Smith](http://mds.is/) and [Sam Soffes](https://soff.es/).

![Contrast in action](https://mds-assets.s3.amazonaws.com/contrast/contrast-card-v0.2.jpg)

### ColorBox

[ColorBox.io](https://colorbox.io) is a fantastic web application for generating shades of colors, for use in a Design System. By defining the HSL values of the start and end colours, as well as specifying how many steps you would like, colorbox generates a range of colours that you import into Figma or your design system codebase.

### Shades

**Shameless plug**, but I created my own version of a colour palette generation app. I built [Shades](https://shades.nathansimpson.design) as a challenge to myself to reimplement colour-conversion algorithms in JavaScript, which I then [gave a talk about at SydJS](/talks/manipulate-colour-in-javascript). It's different to Colorbox as you input a singular HEX colour and it generates shades of that color.

### TypeScript

Yes, I am one of _those_ people that quite like [TypeScript](https://www.typescriptlang.org/). Being able to enumerate the different props that a component expects, and the documentation benefits that come with that, is perfect for Design Systems.

### More

- [Smart Swatch](https://smart-swatch.netlify.app/)
- [InVision Design System Manager](https://www.invisionapp.com/design-system-manager)

---

## Learning

### Design System Meetup

Based in Sydney Australia, the [Design System Meetup](https://designsystemmeetup.com/) is a fantastic community of Design System professionals from various organisations, to connect and collaborate.

---

## Articles and Guides

- [Designing accessible color systems by Stripe](https://stripe.com/blog/accessible-color-systems)
- [Apple Human Interface guidelines](https://developer.apple.com/design/human-interface-guidelines/)
