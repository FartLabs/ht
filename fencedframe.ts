import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * FencedframeElementProps are the props for the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Element/fencedframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/fencedframe>
 * @experimental
 */
export interface FencedframeElementProps extends GlobalAttributes {
}

/**
 * fencedframe renders the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Element/fencedframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/fencedframe>
 * @experimental
 */
export function fencedframe(
  props?: FencedframeElementProps,
  ...children: string[]
): string {
  return renderElement("fencedframe", props as AnyProps, false, children);
}
