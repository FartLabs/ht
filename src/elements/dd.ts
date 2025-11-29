/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * DdElementProps are the props for the [`dd`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd>
 */
export interface DdElementProps extends GlobalAttributes {
}

/**
 * dd renders the [`dd`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd>
 */
export function dd(props?: DdElementProps, ...children: string[]): string {
  return renderElement("dd", props as AnyProps, false, children);
}
