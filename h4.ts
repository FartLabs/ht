import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * H4ElementProps are the props for the [`h4`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export type H4ElementProps = GlobalAttributes;

/**
 * h4 renders the [`h4`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export function h4(props?: H4ElementProps, ...children: string[]): string {
  return renderElement("h4", props as AnyProps, false, children);
}
