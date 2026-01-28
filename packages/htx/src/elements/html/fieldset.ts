/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FieldsetElementProps } from "@fartlabs/ht/html/fieldset";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FieldsetElementProps };

/**
 * FIELDSET renders the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset>
 */
export function FIELDSET(
  props?: FieldsetElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "fieldset",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
