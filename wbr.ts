import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** wbr renders the [`wbr`](https://developer.mozilla.org/docs/Web/HTML/Element/wbr) element. */
export function wbr(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("wbr", props);
}
