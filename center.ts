import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * center renders the [`center`](https://developer.mozilla.org/docs/Web/HTML/Element/center) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/center>
 * @deprecated
 */
export function center(
  props?: GlobalAttributes,
  ...children: string[]
): string {
  return renderElement("center", props as AnyProps, false, children);
}
