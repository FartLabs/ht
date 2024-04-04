import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** sub renders the [`sub`](https://developer.mozilla.org/docs/Web/HTML/Element/sub) element. */
export function sub(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("sub", props);
}
