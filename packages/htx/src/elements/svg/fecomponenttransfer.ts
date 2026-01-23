/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

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
 * FECOMPONENTTRANSFER renders the [`feComponentTransfer`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComponentTransfer) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComponentTransfer>
 */
export function FECOMPONENTTRANSFER(
  props?: FeComponentTransferElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feComponentTransfer",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
