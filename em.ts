import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * EmElementProps are the props for the [`em`](https://developer.mozilla.org/docs/Web/HTML/Element/em) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/em>
 */
export type EmElementProps = GlobalAttributes;

/**
 * em renders the [`em`](https://developer.mozilla.org/docs/Web/HTML/Element/em) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/em>
 */
export function em(props?: EmElementProps, ...children: string[]): string {
  return renderElement("em", props as AnyProps, false, children);
}
