/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FormElementProps } from "@fartlabs/ht/html/form";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FormElementProps };

/**
 * FORM renders the [`form`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form>
 */
export function FORM(
  props?: FormElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "form",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
