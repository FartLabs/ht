/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * SelectedcontentElementProps are the props for the [`selectedcontent`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/selectedcontent) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/selectedcontent>
 * @experimental
 */
export interface SelectedcontentElementProps extends GlobalAttributes {
}

/**
 * selectedcontent renders the [`selectedcontent`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/selectedcontent) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/selectedcontent>
 * @experimental
 */
export function selectedcontent(
  props?: SelectedcontentElementProps,
  ...children: string[]
): string {
  return renderElement("selectedcontent", props as AnyProps, false, children);
}
