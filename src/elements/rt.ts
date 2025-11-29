/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

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
