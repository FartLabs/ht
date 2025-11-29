/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * SmallElementProps are the props for the [`small`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/small) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/small>
 */
export interface SmallElementProps extends GlobalAttributes {
}

/**
 * small renders the [`small`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/small) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/small>
 */
export function small(
  props?: SmallElementProps,
  ...children: string[]
): string {
  return renderElement("small", props as AnyProps, false, children);
}
