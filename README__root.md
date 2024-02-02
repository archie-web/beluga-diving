# Getting Started

```bash
npm run dev
# or
yarn dev
```

First, run the development server:

## DDEV

```sh
ddev config
ddev start
ddev ssh
```

## Installing dependencies

```sh
ddev ssh
cd ./apps/frontend
npm install
```

## Storybook

```sh
npm run storybook
```

### Environment files

When working locally there are a few environment files needed, these files should never be commited as environment variables are handled and stored securing in Vercel once deployed.

Each required environment file already exists in the repository with the file name suffixed with `.example`.  
Simply duplicate these and remove the .example suffix.

### Prettier

This requires that all developers install the [Prettier](https://prettier.io/) plugin for their IDE.  
Ideally each developer should use VSCode to ensure consistency.

The way Prettier works is when a file is saved the IDE will use Prettier's opinionated formatting rules to reformat the file.  
This ensures all files are formatted and reduces the need for code style reviews.

To ensure consistency ensure prettier is configure **on save**

### ESLint

The Next.js application under `./apps/frontend` is configured to use ESLint for javascript linting.  
This will help each developer spot issues or errors before they are deployed. The `.eslintrc` file in Next contains the configuration for this.

Again most IDE's will have an ESLint plugin which needs to be installed when working on this project. VSCode is strongly recommended.

To lint the Next.js project prior to commiting changes you can run `npm run lint`

#### IDE plugins

There are IDE plugins that are highly recommended to use in order to get the most out of plugins in this project.

- Tailwind CSS Intellisense
- ESLint
- Prettier
- Editorconfig
- And of course any plugins that assist with syntax highlighting

## Other important files

- `./.vscode/settings.json` Contains settings to assist VSCode IDE e.g. eslint workspaces
- `./apps/frontend/tailwind.config.js` Configuration for Tailwind CSS
- `./apps/frontend/next.config.js` Configuration for Next e.g. [headers](https://nextjs.org/docs/advanced-features/security-headers), rewrites, redirects and webpack
- `./apps/frontend/tsconfig.json` 
- `./apps/frontend/.eslintrc.json` Configures ESLint for IDE's and [Next.js](https://nextjs.org/docs/basic-features/eslint)
- `./apps/frontend/postcss.config.js` Configure PostCSS for [Next.js](https://nextjs.org/docs/advanced-features/customizing-postcss-config)
- `./apps/frontend/.editorconfig` Configures IDE's (editors) to use the same formating for different languages
- `./apps/frontend/.env.local.example` An example environment file for local development (should be duplicated and renamed locally)
