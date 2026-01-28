/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { OptionElementProps } from "@fartlabs/ht/html/option";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { OptionElementProps };

/**
 * OPTION renders the [`option`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option>
 */
export function OPTION(
  props?: OptionElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "option",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
