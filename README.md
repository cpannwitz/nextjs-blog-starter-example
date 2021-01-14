# Next.js blog starter example

This blog starter is based on Next.js, which provides static content generation based on files which are turned into pages.
In this example we use Markdown files, which are transformed and extended by [Unified](https://github.com/unifiedjs/unified).

## Markdown to JSX parsing

### Frontmatter
Available frontmatter fields are defined in `postApi.ts`.
Those fields are extracted and provided when all posts are fetched (`getAllPosts`), or a single post is fetched (`getPostBySlug`).

### Steps with Plugins
| _   | Name             | Usage                               |
| --- | ---------------- | ----------------------------------- |
| 1   | remark-parse     | parse Markdown to `mdast`           |
| 2   | remark-slug      | enable IDs for headings             |
| 3   | remark-gfm       | enable Github Markdown flavour      |
| 4   | remark-rehype    | parse `mdast` to HTML               |
| 5   | rehype-highlight | syntax highlighting with `lowlight` |
| 6   | rehype-react     | parse HTML to JSX                   |

## Structure
### Index page
Index page (`pages/index.tsx`) contains the list of blog posts with a link to their dedicated site (build by `pages/blog/[slug].tsx`).
### Blog post pages
Individual blog post pages are build by `pages/blog/[slug].tsx`, which maps to the slug values of the posts. (see [Next.js Dynamic Routing](https://nextjs.org/docs/routing/dynamic-routes))

### Assets
Blog post assets like images are located in the `public/blog` folder, where Next.js finds all statically available assets.

## Comments via Utterances
See [Utteranc.es](https://utteranc.es/) and `components/PostComments.tsx`

## Base - Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.