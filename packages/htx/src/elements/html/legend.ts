/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { LegendElementProps } from "@fartlabs/ht/html/legend";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { LegendElementProps };

/**
 * LEGEND renders the [`legend`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/legend) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/legend>
 */
export function LEGEND(
  props?: LegendElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "legend",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
