/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ButtonElementProps } from "@fartlabs/ht/html/button";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { ButtonElementProps };

/**
 * BUTTON renders the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button>
 */
export function BUTTON(
  props?: ButtonElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "button",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
