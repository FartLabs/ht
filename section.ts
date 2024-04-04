import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** section renders the [`section`](https://developer.mozilla.org/docs/Web/HTML/Element/section) element. */
export function section(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("section", props);
}
