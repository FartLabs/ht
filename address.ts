import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** address renders the [`address`](https://developer.mozilla.org/docs/Web/HTML/Element/address) element. */
export function address(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("address", props);
}
