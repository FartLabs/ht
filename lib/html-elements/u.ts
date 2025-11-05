/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * UElementProps are the props for the [`u`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/u) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/u>
 */
export interface UElementProps extends GlobalAttributes {
}

/**
 * u renders the [`u`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/u) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/u>
 */
export function u(props?: UElementProps, ...children: string[]): string {
  return renderElement("u", props as AnyProps, false, children);
}
