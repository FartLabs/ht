import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * H6ElementProps are the props for the [`h6`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export interface H6ElementProps extends GlobalAttributes {
}

/**
 * h6 renders the [`h6`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export function h6(props?: H6ElementProps, ...children: string[]): string {
  return renderElement("h6", props as AnyProps, false, children);
}
