/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * SmallElementProps are the props for the [`small`](https://developer.mozilla.org/docs/Web/HTML/Element/small) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/small>
 */
export interface SmallElementProps extends GlobalAttributes {
}

/**
 * small renders the [`small`](https://developer.mozilla.org/docs/Web/HTML/Element/small) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/small>
 */
export function small(
  props?: SmallElementProps,
  ...children: string[]
): string {
  return renderElement("small", props as AnyProps, false, children);
}
