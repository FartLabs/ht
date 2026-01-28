/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TextareaElementProps } from "@fartlabs/ht/html/textarea";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { TextareaElementProps };

/**
 * TEXTAREA renders the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea>
 */
export function TEXTAREA(
  props?: TextareaElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "textarea",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
