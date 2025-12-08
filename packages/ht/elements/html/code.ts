/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * CodeElementProps are the props for the [`code`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/code) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/code>
 */
export interface CodeElementProps extends GlobalAttributes {
}

/**
 * code renders the [`code`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/code) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/code>
 */
export function code(props?: CodeElementProps, ...children: string[]): string {
  return renderElement("code", props as AnyProps, false, children);
}
