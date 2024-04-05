import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * SubElementProps are the props for the [`sub`](https://developer.mozilla.org/docs/Web/HTML/Element/sub) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/sub>
 */
export type SubElementProps = GlobalAttributes;

/**
 * sub renders the [`sub`](https://developer.mozilla.org/docs/Web/HTML/Element/sub) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/sub>
 */
export function sub(props?: SubElementProps, ...children: string[]): string {
  return renderElement("sub", props as AnyProps, false, children);
}
