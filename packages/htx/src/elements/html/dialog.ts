/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DialogElementProps } from "@fartlabs/ht/html/dialog";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { DialogElementProps };

/**
 * DIALOG renders the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog>
 */
export function DIALOG(
  props?: DialogElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "dialog",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
