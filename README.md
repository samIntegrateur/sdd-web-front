# Sdd web front

## Ide config
For jetBrains IDE users (IntelliJ, Webstorm)
For a better experience, install / enable "stylelint" and "postcss" plugins
Then in File | Settings | Languages & Frameworks | Style Sheets | Dialects, add postcss

## Apollo setup
This project uses method shown here https://www.youtube.com/watch?v=ZAsZ2hhdj-s
For the withApollo HOC, the video itsef is inspired by an older version of
https://hasura.io/learn/graphql/nextjs-fullstack-serverless/apollo-client/

DOn't know it's the best solution, maybe update or see this
https://dev.to/angad777/setting-up-apollo-graphql-in-next-js-with-server-side-rendering-45l5
or https://github.com/lfades/next-with-apollo

- <b>Apollo client</b> (Apollo boost migration to handle token refresh) to add some automation
- A <b>custom withApollo HOC</b>, to connect Next server to our Node server and Next client
- <b>@graphql-codegen</b> to generate automatically types and hooks for graphql requests


## Svg and icons use
This project uses [react-svgr](https://react-svgr.com/docs/cli/) (cli version)

Procedure:
- Add new svg files in /public/svg
- Run "npm run build:svg" in a terminal to generate react components in /components/Svg
- You can either import directly the specified svg
- Or use the Icon "wrapper" component (/components/Icon), useful if it's an icon

nb: I have created the /tools/svgr-index-template.js to make one exported object, 
in order to make the icon handler easier.

---
#Default generated doc

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
