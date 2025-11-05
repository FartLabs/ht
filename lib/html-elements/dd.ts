/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * DdElementProps are the props for the [`dd`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd>
 */
export interface DdElementProps extends GlobalAttributes {
}

/**
 * dd renders the [`dd`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd>
 */
export function dd(props?: DdElementProps, ...children: string[]): string {
  return renderElement("dd", props as AnyProps, false, children);
}
