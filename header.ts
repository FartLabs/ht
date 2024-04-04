import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** header renders the [`header`](https://developer.mozilla.org/docs/Web/HTML/Element/header) element. */
export function header(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("header", props);
}
