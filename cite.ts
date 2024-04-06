import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * CiteElementProps are the props for the [`cite`](https://developer.mozilla.org/docs/Web/HTML/Element/cite) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/cite>
 */
export interface CiteElementProps extends GlobalAttributes {
}

/**
 * cite renders the [`cite`](https://developer.mozilla.org/docs/Web/HTML/Element/cite) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/cite>
 */
export function cite(props?: CiteElementProps, ...children: string[]): string {
  return renderElement("cite", props as AnyProps, false, children);
}
