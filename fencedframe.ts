import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * fencedframe renders the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Element/fencedframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/fencedframe>
 * @experimental
 */
export function fencedframe(
  props?: GlobalAttributes,
  ...children: string[]
): string {
  return renderElement("fencedframe", props as AnyProps, false, children);
}
