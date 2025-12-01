/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * DatalistElementProps are the props for the [`datalist`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/datalist) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/datalist>
 */
export interface DatalistElementProps extends GlobalAttributes {
}

/**
 * datalist renders the [`datalist`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/datalist) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/datalist>
 */
export function datalist(
  props?: DatalistElementProps,
  ...children: string[]
): string {
  return renderElement("datalist", props as AnyProps, false, children);
}
