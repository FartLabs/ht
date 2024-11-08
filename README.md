# [@fartlabs/ht](https://jsr.io/@fartlabs/ht)

[![JSR score](https://jsr.io/badges/@fartlabs/ht/score)](https://jsr.io/@fartlabs/ht)
[![GitHub Actions](https://github.com/FartLabs/ht/actions/workflows/check.yaml/badge.svg)](https://github.com/FartLabs/ht/actions/workflows/check.yaml)

An HTML rendering library.

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

## Contribute

We appreciate your help!

### Style

Run `deno fmt` to format the code.

Run `deno lint` to lint the code.

Run `deno task generate` to generate code.

---

Developed with ❤️ [**@FartLabs**](https://github.com/FartLabs)
