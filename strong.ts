import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** strong renders the [`strong`](https://developer.mozilla.org/docs/Web/HTML/Element/strong) element. */
export function strong(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("strong", props);
}
