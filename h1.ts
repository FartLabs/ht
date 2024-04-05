import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * H1ElementProps are the props for the [`h1`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export type H1ElementProps = GlobalAttributes;

/**
 * h1 renders the [`h1`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export function h1(props?: H1ElementProps, ...children: string[]): string {
  return renderElement("h1", props as AnyProps, false, children);
}
