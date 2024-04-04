# html

[![JSR score](https://jsr.io/badges/@fartlabs/html/score)](https://jsr.io/@fartlabs/html)
[![GitHub Actions](https://github.com/FartLabs/html/actions/workflows/check.yaml/badge.svg)](https://github.com/FartLabs/html/actions/workflows/check.yaml)

An HTML rendering library.

## Getting started

1\. [Install Deno](https://docs.deno.com/runtime/manual).

2\. Start a new Deno project.

```sh
deno init
```

3\. Add html as a project dependency.

```sh
deno add @fartlabs/html
```

4\. Add a file ending in `.[j|t]s` to your project. For example, `main.ts`.

```ts
import { a } from "@fartlabs/html";

const html = a({ href: "https://example.com" }, "Hello, world!");

Deno.writeTextFileSync("index.html", html);
```

5\. Compile your html by running the `.[j|t]s` file.

```sh
deno run --allow-write main.ts
```

Resulting `index.html`:

```html
<a href="https://example.com">Hello, world!</a>
```

## Contribute

We appreciate your help!

### Style

Run `deno fmt` to format the code.

Run `deno lint` to lint the code.

Run `deno task generate` to generate code.

---

Developed with ❤️ [**@FartLabs**](https://github.com/FartLabs)
