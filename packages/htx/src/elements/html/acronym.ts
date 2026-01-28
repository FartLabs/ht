/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AcronymElementProps } from "@fartlabs/ht/html/acronym";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { AcronymElementProps };

/**
 * ACRONYM renders the [`acronym`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/acronym) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/acronym>
 * @deprecated
 */
export function ACRONYM(
  props?: AcronymElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "acronym",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
