import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * BdoElementProps are the props for the [`bdo`](https://developer.mozilla.org/docs/Web/HTML/Element/bdo) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/bdo>
 */
export type BdoElementProps = GlobalAttributes;

/**
 * bdo renders the [`bdo`](https://developer.mozilla.org/docs/Web/HTML/Element/bdo) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/bdo>
 */
export function bdo(props?: BdoElementProps, ...children: string[]): string {
  return renderElement("bdo", props as AnyProps, false, children);
}
