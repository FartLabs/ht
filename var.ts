import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * VarElementProps are the props for the [`var`](https://developer.mozilla.org/docs/Web/HTML/Element/var) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/var>
 */
export type VarElementProps = GlobalAttributes;

/**
 * var_ renders the [`var`](https://developer.mozilla.org/docs/Web/HTML/Element/var) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/var>
 */
export function var_(props?: VarElementProps, ...children: string[]): string {
  return renderElement("var", props as AnyProps, false, children);
}
