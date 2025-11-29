/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * SearchElementProps are the props for the [`search`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/search) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/search>
 */
export interface SearchElementProps extends GlobalAttributes {
}

/**
 * search renders the [`search`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/search) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/search>
 */
export function search(
  props?: SearchElementProps,
  ...children: string[]
): string {
  return renderElement("search", props as AnyProps, false, children);
}
