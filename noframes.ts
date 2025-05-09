/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * NoframesElementProps are the props for the [`noframes`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noframes) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noframes>
 * @deprecated
 */
export interface NoframesElementProps extends GlobalAttributes {
}

/**
 * noframes renders the [`noframes`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noframes) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noframes>
 * @deprecated
 */
export function noframes(
  props?: NoframesElementProps,
  ...children: string[]
): string {
  return renderElement("noframes", props as AnyProps, false, children);
}
