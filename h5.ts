import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * H5ElementProps are the props for the [`h5`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export type H5ElementProps = GlobalAttributes;

/**
 * h5 renders the [`h5`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements>
 */
export function h5(props?: H5ElementProps, ...children: string[]): string {
  return renderElement("h5", props as AnyProps, false, children);
}
