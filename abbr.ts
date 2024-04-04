import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** abbr renders the [`abbr`](https://developer.mozilla.org/docs/Web/HTML/Element/abbr) element. */
export function abbr(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("abbr", props);
}
