# create-svelte

This is a simple UI to explore XKCD strips - <https://xkcd.com>. It is built using Next.js and TypeScript.
Demo: <https://xkcd-comics-next-js.vercel.app/>

Supported features:

1. Display thumbnails for all the strips with pagination on home page, route `/`
2. When use click on thumbnail, it will open thumbnail page with pagination navigation, route
   `/comics/[id]`
3. Route `/comics` will redirect to `/comics/[last_id]`
4. Breadcrumbs for easy navigation
5. 404 error handling
6. XKCD API in JSON format, `/api/comics`, `/api/comics/[id]`, `/api/comics/batch/[id]`
7. Caching images, and caching fetch requests to XKCD permanently for `/comics/[id]`, and revalidate
   every 1 day `/comics/[last_id]`
8. ESLint, Prettier, Husky, Lint-staged for code quality

Requirements:

- Use the API described at <https://xkcd.com/json.html>
- The UI should be able to display thumbnails for all the strips (but not necessarily show all at
  the same time)
- You should be able to explore each strip more closely in some way
- Build your software in a way that you can build upon and maintain it for a long time to come.
- Add an extra feature/functionality that shows us who you are as an engineer.

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Getting Started

If you're seeing this, you've probably already done this step. Congrats!

```bash
# install BunJS runtime if you haven't already
curl -fsSL https://bun.sh/install | bash
# Add BunJS to your shell profile
exec /bin/zsh
# Verify that BunJS is installed
bun --help

# create a new project in the current directory
bun create svelte@latest

# create a new project in my-app
bun create svelte@latest XKCD-Comics-Svelte-Kit
```

## Developing

Once you've created a project and installed dependencies with `bun install` (or `npm install` or `pnpm install` or `yarn`), start a development server:

```bash
bun install
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
