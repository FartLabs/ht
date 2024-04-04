import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** small renders the [`small`](https://developer.mozilla.org/docs/Web/HTML/Element/small) element. */
export function small(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("small", props);
}
