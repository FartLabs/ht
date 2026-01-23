/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * RbElementProps are the props for the [`rb`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rb) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rb>
 * @deprecated
 */
export interface RbElementProps extends GlobalAttributes {
}

/**
 * rb renders the [`rb`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rb) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rb>
 * @deprecated
 */
export function rb(props?: RbElementProps, ...children: string[]): string {
  return renderElement("rb", props as AnyProps, false, children);
}
