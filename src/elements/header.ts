/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * HeaderElementProps are the props for the [`header`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/header) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/header>
 */
export interface HeaderElementProps extends GlobalAttributes {
}

/**
 * header renders the [`header`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/header) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/header>
 */
export function header(
  props?: HeaderElementProps,
  ...children: string[]
): string {
  return renderElement("header", props as AnyProps, false, children);
}
