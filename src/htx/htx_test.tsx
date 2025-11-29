/** @jsx react-jsx */
/** @jsxImportSource @fartlabs/jsonx */

import { DIV } from "./mod.ts";

export function MyComponent() {
  return <DIV>Hello World</DIV>;
}

Deno.test("MyComponent renders a valid HTML string", () => {
  const html = <MyComponent />;
  console.log(html);
});
