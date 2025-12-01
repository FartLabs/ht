/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * FeComponentTransferElementProps are the props for the [`feComponentTransfer`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComponentTransfer) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComponentTransfer>
 */
export interface FeComponentTransferElementProps extends GlobalAttributes {
  /**
   * `in` is an attribute of the [`feComponentTransfer`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComponentTransfer) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComponentTransfer#in>
   */
  in?: string | undefined;
}

/**
 * feComponentTransfer renders the [`feComponentTransfer`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComponentTransfer) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComponentTransfer>
 */
export function feComponentTransfer(
  props?: FeComponentTransferElementProps,
  ...children: string[]
): string {
  return renderElement(
    "feComponentTransfer",
    props as AnyProps,
    false,
    children,
  );
}
