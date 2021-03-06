# Sdd web front

## Ide config
For jetBrains IDE users (IntelliJ, Webstorm)
For a better experience, install / enable "stylelint" and "postcss" plugins
Then in File | Settings | Languages & Frameworks | Style Sheets | Dialects, add postcss

## Auth
This project uses method shown here https://dev.to/justincy/detecting-a-user-s-authenticated-state-client-side-in-next-js-using-an-httponly-cookie-and-static-optimization-6ib
github for ts version : https://github.com/justincy/nextjs-client-auth-architectures/tree/master/static-ts


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
