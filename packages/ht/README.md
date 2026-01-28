# [@fartlabs/ht](https://jsr.io/@fartlabs/ht)

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/FartLabs/ht)

[![JSR version](https://jsr.io/badges/@fartlabs/ht)](https://jsr.io/@fartlabs/ht)
[![JSR score](https://jsr.io/badges/@fartlabs/ht/score)](https://jsr.io/@fartlabs/ht)
[![GitHub Actions](https://github.com/FartLabs/ht/actions/workflows/check.yaml/badge.svg)](https://github.com/FartLabs/ht/actions/workflows/check.yaml)

Type-safe HTML string rendering library for JavaScript and TypeScript.

## API documentation

Generated API documentation is available at <https://jsr.io/@fartlabs/ht>.

## Getting started

1\. [Install Deno](https://docs.deno.com/runtime/manual).

2\. Start a new Deno project.

```sh
deno init
```

3\. Add html as a project dependency.

```sh
deno add jsr:@fartlabs/ht
```

4\. Add a file ending in `.[j|t]s` to your project. For example, `main.ts`.

```ts
import { a } from "@fartlabs/ht";

const html = a({ href: "https://jsr.io/@fartlabs/ht" }, "@fartlabs/ht");

Deno.writeTextFileSync("index.html", html);
```

5\. Compile your html by running the `.[j|t]s` file.

```sh
deno run --allow-write main.ts
```

Resulting `index.html`:

```html
<a href="https://jsr.io/@fartlabs/ht">@fartlabs/ht</a>
```

## Examples

### Multiple attributes

```ts
import { a } from "@fartlabs/ht";

const link = a(
  {
    href: "https://example.com",
    rel: "noopener noreferrer",
    target: "_blank",
    class: "btn",
  },
  "Visit example.com",
);
// <a href="https://example.com" rel="noopener noreferrer" target="_blank" class="btn">Visit example.com</a>
```

### Nested elements

```ts
import { a, div, h1, p } from "@fartlabs/ht";

const content = div(
  { id: "app" },
  h1({}, "Hello"),
  p(
    {},
    "Made with ",
    a({ href: "https://jsr.io/@fartlabs/ht" }, "@fartlabs/ht"),
  ),
);
// <div id="app"><h1>Hello</h1><p>Made with <a href="https://jsr.io/@fartlabs/ht">@fartlabs/ht</a></p></div>
```

### Void elements

```ts
import { br, img, input } from "@fartlabs/ht";

const markup = [
  img({ src: "/logo.png", alt: "Logo" }),
  br(),
  input({ type: "text", name: "q", placeholder: "Search" }),
].join("");
// <img src="/logo.png" alt="Logo"><br><input type="text" name="q" placeholder="Search">
```

### Full document

```ts
import {
  a,
  body,
  footer,
  head,
  header,
  html,
  main,
  meta,
  p,
  title,
} from "@fartlabs/ht";

const page = html(
  { lang: "en" },
  head(
    {},
    meta({ charset: "utf-8" }),
    meta({ name: "viewport", content: "width=device-width, initial-scale=1" }),
    title({}, "My Page"),
  ),
  body(
    {},
    header({}, p({}, "Welcome!")),
    main({}, p({}, "See ", a({ href: "https://jsr.io/@fartlabs/ht" }, "docs"))),
    footer({}, p({}, "© 2025")),
  ),
);

// Write to a file
// Deno.writeTextFileSync("index.html", page);
```

## HTX (JSX) submodule

This repository also hosts the HTX JSX rendering API that was originally
published as `@fartlabs/htx` (see
[`@fartlabs/htx` on GitHub](https://github.com/FartLabs/htx) and
`https://jsr.io/@fartlabs/htx`).

HTX lets you write JSX components that render directly to HTML strings using the
helpers from `@fartlabs/ht`.

### HTX quick start

1. Add the dependency:

   ```sh
   deno add jsr:@fartlabs/ht
   ```

2. Configure JSX for Deno:

   ```jsonc
   {
     "compilerOptions": {
       "jsx": "react-jsx",
       "jsxImportSource": "@fartlabs/ht/htx"
     }
   }
   ```

3. Create a `main.tsx`:

   ```tsx
   import { A, BODY, H1, P } from "@fartlabs/ht/htx";

   const html = (
     <BODY>
       <H1>Hello</H1>
       <P>
         See <A href="https://jsr.io/@fartlabs/htx">@fartlabs/htx</A>
       </P>
     </BODY>
   );
   // html is a string
   ```

4. Run:

   ```sh
   deno run -A main.tsx
   ```

For more detail on HTX in this repo, see `src/htx/README.md` and the HTX
concepts guide at `https://jsonx.fart.tools/concepts/htx`.

## Contribute

We appreciate your help!

### Style

Run `deno fmt` to format the code.

Run `deno lint` to lint the code.

Run `deno task generate` to regenerate the typed HTML element functions from MDN
data. This updates element/attribute typings and (re)creates files in
`lib/html-elements/`.

Other helpful tasks:

- `deno task outdated`: Review available dependency updates.

### Development

- The library has no runtime dependencies.
- The element functions are generated from `@mdn/browser-compat-data` and `MDN`
  references.
- If you add or adjust generation logic, run `deno task generate` and commit the
  resulting edits.

## License

This project is licensed under the terms of the MIT License. See `LICENSE` for
details.

---

Developed with ❤️ [**@FartLabs**](https://github.com/FartLabs)
