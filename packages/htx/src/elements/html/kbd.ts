/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { KbdElementProps } from "@fartlabs/ht/html/kbd";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { KbdElementProps };

/**
 * KBD renders the [`kbd`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/kbd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/kbd>
 */
export function KBD(
  props?: KbdElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "kbd",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
