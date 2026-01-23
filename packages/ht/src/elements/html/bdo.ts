/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * BdoElementProps are the props for the [`bdo`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdo) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdo>
 */
export interface BdoElementProps extends GlobalAttributes {
}

/**
 * bdo renders the [`bdo`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdo) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdo>
 */
export function bdo(props?: BdoElementProps, ...children: string[]): string {
  return renderElement("bdo", props as AnyProps, false, children);
}
