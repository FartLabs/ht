import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * NobrElementProps are the props for the [`nobr`](https://developer.mozilla.org/docs/Web/HTML/Element/nobr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/nobr>
 * @deprecated
 */
export interface NobrElementProps extends GlobalAttributes {
}

/**
 * nobr renders the [`nobr`](https://developer.mozilla.org/docs/Web/HTML/Element/nobr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/nobr>
 * @deprecated
 */
export function nobr(props?: NobrElementProps, ...children: string[]): string {
  return renderElement("nobr", props as AnyProps, false, children);
}
