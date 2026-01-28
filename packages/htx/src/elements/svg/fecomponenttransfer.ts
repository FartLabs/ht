/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeComponentTransferElementProps } from "@fartlabs/ht/svg/feComponentTransfer";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeComponentTransferElementProps };

/**
 * FECOMPONENTTRANSFER renders the [`feComponentTransfer`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComponentTransfer) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComponentTransfer>
 */
export function FECOMPONENTTRANSFER(
  props?: FeComponentTransferElementProps & {
    children?: string | string[] | undefined;
  },
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
