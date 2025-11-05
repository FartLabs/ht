/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * SubElementProps are the props for the [`sub`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sub) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sub>
 */
export interface SubElementProps extends GlobalAttributes {
}

/**
 * sub renders the [`sub`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sub) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sub>
 */
export function sub(props?: SubElementProps, ...children: string[]): string {
  return renderElement("sub", props as AnyProps, false, children);
}
