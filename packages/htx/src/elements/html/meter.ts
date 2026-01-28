/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MeterElementProps } from "@fartlabs/ht/html/meter";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MeterElementProps };

/**
 * METER renders the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter>
 */
export function METER(
  props?: MeterElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "meter",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
