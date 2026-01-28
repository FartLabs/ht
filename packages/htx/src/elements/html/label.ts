/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { LabelElementProps } from "@fartlabs/ht/html/label";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { LabelElementProps };

/**
 * LABEL renders the [`label`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label>
 */
export function LABEL(
  props?: LabelElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "label",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
