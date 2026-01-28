/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AreaElementProps } from "@fartlabs/ht/html/area";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { AreaElementProps };

/**
 * AREA renders the [`area`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area>
 */
export function AREA(
  props?: AreaElementProps & { children?: string | string[] | undefined },
): string {
  const { children: _propsChildren, ...rest } = props ?? {};
  return renderElement("area", rest as AnyProps, true);
}
