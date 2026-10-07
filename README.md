# Discover – Travel Agency Homepage

A responsive travel agency homepage prototype built with **React**, **Vite** and **Less**.

## Features

- **Navbar** with a mobile off-canvas menu (keyboard accessible: `aria-expanded`, Escape to close, click outside to close)
- **Hero** section
- **Destination carousel** built with [Swiper](https://swiperjs.com/) (responsive breakpoints, custom arrows, pagination)
- **Call to action** banner
- **Footer** with navigation columns, social links and a subscribe form
- Responsive layouts using **container queries**
- Reusable components with **variants** (e.g. `Button`, `Heading`, `Paragraph`, `LinkList`)

## Tech stack

| Tool | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI components |
| [Vite](https://vite.dev/) | Dev server and build |
| [Less](https://lesscss.org/) | Styles |
| [Swiper](https://swiperjs.com/react) | Carousel |

## Getting started

Requires [Node.js](https://nodejs.org/) 20 or later.

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
├── App.jsx                # page layout
├── main.jsx               # React entry point
├── content.js             # all text, links and image imports
├── assets/img/            # images
├── styles/variables.less  # shared Less variables
└── components/            # one folder per component (.jsx + .less)
    ├── Brand/
    ├── Buttons/
    ├── CallToAction/
    ├── Footer/
    ├── Headings/
    ├── Hero/
    ├── InputField/
    ├── Label/
    ├── LinkList/
    ├── Navbar/
    ├── Paragraph/
    ├── SocialMediaIcon/
    └── TileCarousel/
```

## Conventions

- **Content lives in `src/content.js`.** Components read text and images from there, so copy can change without touching JSX.
- **Design choices live in JSX** through props such as `variant` and `level`.
- **Styles use BEM** naming (`block__element--modifier`) and are nested under the component's root class to avoid global clashes.

## Credits

- "Hidden Gems" photo (`src/assets/img/body/hidden-gems.jpg`): [BesartaVuqa](https://commons.wikimedia.org/wiki/File:24701-nature-natural-beauty.jpg), Wikimedia Commons, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
