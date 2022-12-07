# Examples of slow request handling in Remix

This repo features 4 different ways of handling slow routes in remix:

1. [Prefecth](https://github.com/remixcph/deferred-demo/compare/main...01-prefetch)
2. [useTransition](https://github.com/remixcph/deferred-demo/compare/main...02-use-transition)
3. [useEffect + useFetcher](https://github.com/remixcph/deferred-demo/compare/main...03-use-effect)
4. [Deferred](https://github.com/remixcph/deferred-demo/compare/main...04-deferred)

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

## Further reading on deferred

- [React router docs that describes the problem and the solution](https://beta.reactrouter.com/en/main/guides/deferred)
- [Remix blog on the Remix<>React Router refactoring](https://remix.run/blog/remixing-react-router)
- [ADR document from Remix describing the process of migrating Remix to use React Router 6.4](https://github.com/remix-run/remix/blob/main/decisions/0007-remix-on-react-router-6-4-0.md)
- [Remix streaming data guide](https://github.com/remix-run/remix/blob/cbec20ee92cad1bb0e2eebff8bbf3c20454dd2c8/docs/guides/streaming.md)
- [Remix PR with the experimental features](https://github.com/remix-run/remix/pull/3434)
