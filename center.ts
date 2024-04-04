import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * center renders the [`center`](https://developer.mozilla.org/docs/Web/HTML/Element/center) element.
 * @deprecated
 */
export function center(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("center", props);
}
