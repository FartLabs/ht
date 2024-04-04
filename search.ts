import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** search renders the [`search`](https://developer.mozilla.org/docs/Web/HTML/Element/search) element. */
export function search(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("search", props);
}
