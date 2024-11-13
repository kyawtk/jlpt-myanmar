# Next Template

## Tech Stack

**Client:** TypeScript ,NextJs, Tailwind CSS, Shadcn UI, Zustand, React Query

**Server:** Nestjs

## Running Tests

**Pls run the following commands before git push**

```bash
  pnpm lint
```

```bash
  pnpm format
```

## Project Structure

```bash
Saungpokki-Frontend-V2
├── messages
│   ├── en.json
│   └── mm.json
├── public
│   ├── images
│   │   └── facetofaceicon.png
│   ├── next.svg
│   └── vercel.svg
├── src
│   ├── app
│   │   ├── [locale]
│   │   │   ├── sample-page
│   │   │   │   ├── components
│   │   │   │   │   └── SampleConponent.tsx
│   │   │   │   ├── hooks
│   │   │   │   │   └── useSampleHook.ts
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   └── globals.css
│   ├── components
│   │   ├── icons
│   │   │   └── IconNotification.tsx
│   │   ├── providers
│   │   │   ├── ReactQueryProvider.tsx
│   │   │   └── ThemeProvider.tsx
│   │   ├── ui
│   │   │   ├── button.tsx
│   │   │   └── dropdown-menu.tsx
│   │   └── ThemeSwitcher.tsx
│   ├── constants
│   │   └── pathname.ts
│   ├── services
│   │   ├── auth
│   │   │   ├── auth.key.ts
│   │   │   ├── auth.mutation.ts
│   │   │   └── auth.query.ts
│   │   └── api.ts
│   ├── hooks
│   │   └── useWindowSize.ts
│   ├── lib
│   │   └── utils.ts
│   ├── stores
│   │   └── dialog.store.ts
│   ├── types
│   │   └── auth.d.ts
│   ├── i18n.ts
│   └── middleware.ts
├── README.md
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json

```

## Project Structure Documentation

### messages

The `messages` folder is for localization data. To add Thai localization, please include `th.json`.

### public

The `public` folder is for static assets such as images and fonts. You can add any static data here.

### src

#### [locale]

The `[locale]` folder is for route-specific localization. Every new page must be created inside the `[locale]` folder.

To maintain better colocation, use separate component and hook files:

- Example Component: `[locale]/sample-page/components/SampleComponent.tsx`
- Example Hook: `[locale]/sample-page/hooks/useSampleHook.ts`

#### components

The `components` folder is for reusable and global components.

- All icons should be added inside `src/components/icons/`.
- New Shadcn components will be automatically added to the `components/ui/` folder.

#### constants

The `constants` folder is used for storing constant values to maintain consistent links and routes.

- `pathname.ts`: Contains pathnames and routes. Every new route must be added to `pathname.ts`.

#### services

The `services` folder is used for API fetching. We use React Query for an improved developer experience.

#### hooks

The `hooks` folder is for reusable hooks.

#### lib

The `lib` folder is for reusable functions.

#### stores

The `stores` folder is used for state management with Zustand. All Zustand-related files should be added to the `stores` folder.

#### types

The `types` folder is for API request/response types and other type definitions to ensure better type safety.

---

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

```bash
NODE_ENV=
NEXT_PUBLIC_BASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
NEXT_PUBLIC_GOOGLE_CLIENT_ID=
```

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm dev
```
