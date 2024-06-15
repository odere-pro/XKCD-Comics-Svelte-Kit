# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

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
