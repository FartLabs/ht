/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { WbrElementProps } from "@fartlabs/ht/html/wbr";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { WbrElementProps };

/**
 * WBR renders the [`wbr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/wbr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/wbr>
 */
export function WBR(
  props?: WbrElementProps & { children?: string | string[] | undefined },
): string {
  const { children: _propsChildren, ...rest } = props ?? {};
  return renderElement("wbr", rest as AnyProps, true);
}
