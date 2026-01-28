/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { UlElementProps } from "@fartlabs/ht/html/ul";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { UlElementProps };

/**
 * UL renders the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul>
 */
export function UL(
  props?: UlElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "ul",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
