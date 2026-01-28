/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AddressElementProps } from "@fartlabs/ht/html/address";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { AddressElementProps };

/**
 * ADDRESS renders the [`address`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/address) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/address>
 */
export function ADDRESS(
  props?: AddressElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "address",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
