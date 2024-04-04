import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * fencedframe renders the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Element/fencedframe) element.
 * @experimental
 */
export function fencedframe(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("fencedframe", props);
}
