import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * NoscriptElementProps are the props for the [`noscript`](https://developer.mozilla.org/docs/Web/HTML/Element/noscript) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/noscript>
 */
export type NoscriptElementProps = GlobalAttributes;

/**
 * noscript renders the [`noscript`](https://developer.mozilla.org/docs/Web/HTML/Element/noscript) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/noscript>
 */
export function noscript(
  props?: NoscriptElementProps,
  ...children: string[]
): string {
  return renderElement("noscript", props as AnyProps, false, children);
}
