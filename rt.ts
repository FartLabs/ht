/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * RtElementProps are the props for the [`rt`](https://developer.mozilla.org/docs/Web/HTML/Element/rt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/rt>
 */
export interface RtElementProps extends GlobalAttributes {
}

/**
 * rt renders the [`rt`](https://developer.mozilla.org/docs/Web/HTML/Element/rt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/rt>
 */
export function rt(props?: RtElementProps, ...children: string[]): string {
  return renderElement("rt", props as AnyProps, false, children);
}
