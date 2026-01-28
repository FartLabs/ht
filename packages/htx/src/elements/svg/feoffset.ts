/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FeOffsetElementProps } from "@fartlabs/ht/svg/feOffset";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FeOffsetElementProps };

/**
 * FEOFFSET renders the [`feOffset`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feOffset) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feOffset>
 */
export function FEOFFSET(
  props?: FeOffsetElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feOffset",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
