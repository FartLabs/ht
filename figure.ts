import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * FigureElementProps are the props for the [`figure`](https://developer.mozilla.org/docs/Web/HTML/Element/figure) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/figure>
 */
export type FigureElementProps = GlobalAttributes;

/**
 * figure renders the [`figure`](https://developer.mozilla.org/docs/Web/HTML/Element/figure) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/figure>
 */
export function figure(
  props?: FigureElementProps,
  ...children: string[]
): string {
  return renderElement("figure", props as AnyProps, false, children);
}
