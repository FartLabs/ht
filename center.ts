import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * CenterElementProps are the props for the [`center`](https://developer.mozilla.org/docs/Web/HTML/Element/center) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/center>
 * @deprecated
 */
export type CenterElementProps = GlobalAttributes;

/**
 * center renders the [`center`](https://developer.mozilla.org/docs/Web/HTML/Element/center) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/center>
 * @deprecated
 */
export function center(
  props?: CenterElementProps,
  ...children: string[]
): string {
  return renderElement("center", props as AnyProps, false, children);
}
