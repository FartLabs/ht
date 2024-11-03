/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * AddressElementProps are the props for the [`address`](https://developer.mozilla.org/docs/Web/HTML/Element/address) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/address>
 */
export interface AddressElementProps extends GlobalAttributes {
}

/**
 * address renders the [`address`](https://developer.mozilla.org/docs/Web/HTML/Element/address) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/address>
 */
export function address(
  props?: AddressElementProps,
  ...children: string[]
): string {
  return renderElement("address", props as AnyProps, false, children);
}
