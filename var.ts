import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** var_ renders the [`var`](https://developer.mozilla.org/docs/Web/HTML/Element/var) element. */
export function var_(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("var", props);
}
