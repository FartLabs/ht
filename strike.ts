import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * StrikeElementProps are the props for the [`strike`](https://developer.mozilla.org/docs/Web/HTML/Element/strike) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/strike>
 * @deprecated
 */
export type StrikeElementProps = GlobalAttributes;

/**
 * strike renders the [`strike`](https://developer.mozilla.org/docs/Web/HTML/Element/strike) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/strike>
 * @deprecated
 */
export function strike(
  props?: StrikeElementProps,
  ...children: string[]
): string {
  return renderElement("strike", props as AnyProps, false, children);
}
