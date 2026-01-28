/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { OlElementProps } from "@fartlabs/ht/html/ol";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { OlElementProps };

/**
 * OL renders the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol>
 */
export function OL(
  props?: OlElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "ol",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
