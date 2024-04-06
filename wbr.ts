import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * WbrElementProps are the props for the [`wbr`](https://developer.mozilla.org/docs/Web/HTML/Element/wbr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/wbr>
 */
export interface WbrElementProps extends GlobalAttributes {
}

/**
 * wbr renders the [`wbr`](https://developer.mozilla.org/docs/Web/HTML/Element/wbr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/wbr>
 */
export function wbr(props?: WbrElementProps): string {
  return renderElement("wbr", props as AnyProps, true);
}
