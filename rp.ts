import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * RpElementProps are the props for the [`rp`](https://developer.mozilla.org/docs/Web/HTML/Element/rp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/rp>
 */
export interface RpElementProps extends GlobalAttributes {
}

/**
 * rp renders the [`rp`](https://developer.mozilla.org/docs/Web/HTML/Element/rp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/rp>
 */
export function rp(props?: RpElementProps, ...children: string[]): string {
  return renderElement("rp", props as AnyProps, false, children);
}
