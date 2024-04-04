import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** wbr renders the [`wbr`](https://developer.mozilla.org/docs/Web/HTML/Element/wbr) element. */
export function wbr(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("wbr", props);
}
