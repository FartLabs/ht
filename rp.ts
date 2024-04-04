import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** rp renders the [`rp`](https://developer.mozilla.org/docs/Web/HTML/Element/rp) element. */
export function rp(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("rp", props);
}
