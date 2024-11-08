/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * DatalistElementProps are the props for the [`datalist`](https://developer.mozilla.org/docs/Web/HTML/Element/datalist) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/datalist>
 */
export interface DatalistElementProps extends GlobalAttributes {
}

/**
 * datalist renders the [`datalist`](https://developer.mozilla.org/docs/Web/HTML/Element/datalist) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/datalist>
 */
export function datalist(
  props?: DatalistElementProps,
  ...children: string[]
): string {
  return renderElement("datalist", props as AnyProps, false, children);
}
