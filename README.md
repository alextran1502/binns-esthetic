# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
pnpm dlx sv create --template minimal --types ts --add prettier tailwindcss="plugins:typography" sveltekit-adapter="adapter:cloudflare+cfTarget:workers" eslint --install pnpm binns-esthetic
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Tally + Google Sheets

This project supports Tally forms on the Contact page.

1. Create your form(s) in Tally:
   - Waitlist form
   - Appointment form (optional)
2. In Tally, open each form and connect Google Sheets:
   - `Integrations` -> `Google Sheets` -> `Connect` -> choose/create spreadsheet
3. Copy the Tally form ID or full form URL.
4. Set env vars:

```sh
cp .env.example .env
```

Then fill:

- `PUBLIC_TALLY_WAITLIST_FORM`
- `PUBLIC_TALLY_APPOINTMENT_FORM` (optional; falls back to waitlist form)

5. Run/deploy:

```sh
pnpm build
npx wrangler deploy
```
