/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * SearchElementProps are the props for the [`search`](https://developer.mozilla.org/docs/Web/HTML/Element/search) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/search>
 */
export interface SearchElementProps extends GlobalAttributes {
}

/**
 * search renders the [`search`](https://developer.mozilla.org/docs/Web/HTML/Element/search) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/search>
 */
export function search(
  props?: SearchElementProps,
  ...children: string[]
): string {
  return renderElement("search", props as AnyProps, false, children);
}
