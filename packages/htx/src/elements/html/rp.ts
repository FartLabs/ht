/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { RpElementProps } from "@fartlabs/ht/html/rp";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { RpElementProps };

/**
 * RP renders the [`rp`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rp>
 */
export function RP(
  props?: RpElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "rp",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
