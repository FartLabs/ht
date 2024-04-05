import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * RbElementProps are the props for the [`rb`](https://developer.mozilla.org/docs/Web/HTML/Element/rb) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/rb>
 * @deprecated
 */
export type RbElementProps = GlobalAttributes;

/**
 * rb renders the [`rb`](https://developer.mozilla.org/docs/Web/HTML/Element/rb) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/rb>
 * @deprecated
 */
export function rb(props?: RbElementProps, ...children: string[]): string {
  return renderElement("rb", props as AnyProps, false, children);
}
