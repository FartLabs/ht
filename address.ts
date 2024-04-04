import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** address renders the [`address`](https://developer.mozilla.org/docs/Web/HTML/Element/address) element. */
export function address(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("address", props);
}
