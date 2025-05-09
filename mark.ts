/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * MarkElementProps are the props for the [`mark`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/mark) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/mark>
 */
export interface MarkElementProps extends GlobalAttributes {
}

/**
 * mark renders the [`mark`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/mark) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/mark>
 */
export function mark(props?: MarkElementProps, ...children: string[]): string {
  return renderElement("mark", props as AnyProps, false, children);
}
