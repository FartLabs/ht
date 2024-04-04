import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** noscript renders the [`noscript`](https://developer.mozilla.org/docs/Web/HTML/Element/noscript) element. */
export function noscript(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("noscript", props);
}
