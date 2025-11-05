/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * RtElementProps are the props for the [`rt`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rt>
 */
export interface RtElementProps extends GlobalAttributes {
}

/**
 * rt renders the [`rt`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rt>
 */
export function rt(props?: RtElementProps, ...children: string[]): string {
  return renderElement("rt", props as AnyProps, false, children);
}
