/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * AddressElementProps are the props for the [`address`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/address) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/address>
 */
export interface AddressElementProps extends GlobalAttributes {
}

/**
 * address renders the [`address`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/address) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/address>
 */
export function address(
  props?: AddressElementProps,
  ...children: string[]
): string {
  return renderElement("address", props as AnyProps, false, children);
}
