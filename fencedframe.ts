import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * fencedframe renders the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Element/fencedframe) element.
 * @experimental
 */
export function fencedframe(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("fencedframe", props);
}
