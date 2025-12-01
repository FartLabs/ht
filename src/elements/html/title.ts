/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * TitleElementProps are the props for the [`title`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/title) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/title>
 */
export interface TitleElementProps extends GlobalAttributes {
}

/**
 * title renders the [`title`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/title) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/title>
 */
export function title(
  props?: TitleElementProps,
  ...children: string[]
): string {
  return renderElement("title", props as AnyProps, false, children);
}
