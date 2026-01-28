/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TimeElementProps } from "@fartlabs/ht/html/time";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { TimeElementProps };

/**
 * TIME renders the [`time`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/time) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/time>
 */
export function TIME(
  props?: TimeElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "time",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
