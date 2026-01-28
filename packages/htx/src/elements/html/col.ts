/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ColElementProps } from "@fartlabs/ht/html/col";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { ColElementProps };

/**
 * COL renders the [`col`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col>
 */
export function COL(
  props?: ColElementProps & { children?: string | string[] | undefined },
): string {
  const { children: _propsChildren, ...rest } = props ?? {};
  return renderElement("col", rest as AnyProps, true);
}
