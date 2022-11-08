# Examples of slow request handling in Remix

This repo features 3 different ways of handling slow routes in remix:

1. Prefecth
2. useEffect + useFetcher
3. Deferred

In the main branch the initial slow request is just left as is.
The slow route is on http://localhost:300/notes/koala

Each approach to improving the user experience is implemented in a branch.

## Development

- Start dev server:

  ```sh
  npm run dev
  ```

This starts your app in development mode, rebuilding assets on file changes.

The database seed script creates a new user with some data you can use to get started:

- Email: `rachel@remix.run`
- Password: `racheliscool`

This repo is based on the [Remix Indie Stack](https://github.com/remix-run/indie-stack)
