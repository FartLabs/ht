/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { BrElementProps } from "@fartlabs/ht/html/br";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { BrElementProps };

/**
 * BR renders the [`br`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br>
 */
export function BR(
  props?: BrElementProps & { children?: string | string[] | undefined },
): string {
  const { children: _propsChildren, ...rest } = props ?? {};
  return renderElement("br", rest as AnyProps, true);
}
