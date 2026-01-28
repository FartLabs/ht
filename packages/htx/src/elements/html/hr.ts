/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { HrElementProps } from "@fartlabs/ht/html/hr";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { HrElementProps };

/**
 * HR renders the [`hr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr>
 */
export function HR(
  props?: HrElementProps & { children?: string | string[] | undefined },
): string {
  const { children: _propsChildren, ...rest } = props ?? {};
  return renderElement("hr", rest as AnyProps, true);
}
