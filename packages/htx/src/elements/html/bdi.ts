/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { BdiElementProps } from "@fartlabs/ht/html/bdi";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { BdiElementProps };

/**
 * BDI renders the [`bdi`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdi) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdi>
 */
export function BDI(
  props?: BdiElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "bdi",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
