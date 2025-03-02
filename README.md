This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## tl;dr - Live Preview

The project is hosted in Vercel Platform (free tier).

[Live Preview Link](https://weather-app-eosin-two-66.vercel.app/)

## Getting Started (Development)

You need to have [NodeJS](https://nodejs.org/en/download/current) installed in order to run the project.

First, update the `.env` file with openWeatherMap api key.

Second, install the dependencies:

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- [React.js](https://react.dev/)
- [NextJS](https://nextjs.org/)
  - NextJS is choosen because it provide a full-stack development environment. The CLI tool provide enable rapid scaffold & prototyping. It provide fast hot-reload which make development a breeze.
- [Typescript](https://www.typescriptlang.org/)
  - Static Typing – Catches errors at compile time, reducing runtime bugs.
  - Strict Type Checking – Prevents unintended type-related errors.
  - Better Maintainability – Enforces consistency and reduces technical debt.
- [React-Aria UI Component](https://react-spectrum.adobe.com/react-aria/index.html)
  - React Aria provides unstyled components and hooks for common UI elements, enabling reusable, accessible, and internationalized components. It lets developers control styling while ensuring built-in semantics, behavior, and interactions across all input methods and assistive technologies.

## The App

- Search history are stored in [indexDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API). Only 10 most recent search history will be displayed on the UI.
- The floating button with paint brush icon is theme toggle, clicking on it will toggle the theme from light -> dark -> system.

## Possible Improvement

Following are some future imporovement that can be done on this app:

- Internationalization i18n using [react-i18next](https://react.i18next.com/)
- Server Side Rendering (SSR) [NextJS SSR](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering)
- API rate limiting.
- Initial weather search based on user current device location.
- Clear seaerch history function.
