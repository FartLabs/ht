/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * CenterElementProps are the props for the [`center`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/center) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/center>
 * @deprecated
 */
export interface CenterElementProps extends GlobalAttributes {
}

/**
 * center renders the [`center`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/center) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/center>
 * @deprecated
 */
export function center(
  props?: CenterElementProps,
  ...children: string[]
): string {
  return renderElement("center", props as AnyProps, false, children);
}
