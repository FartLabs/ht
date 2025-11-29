/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * NavElementProps are the props for the [`nav`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nav) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nav>
 */
export interface NavElementProps extends GlobalAttributes {
}

/**
 * nav renders the [`nav`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nav) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nav>
 */
export function nav(props?: NavElementProps, ...children: string[]): string {
  return renderElement("nav", props as AnyProps, false, children);
}
