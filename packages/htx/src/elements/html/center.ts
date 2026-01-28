/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { CenterElementProps } from "@fartlabs/ht/html/center";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { CenterElementProps };

/**
 * CENTER renders the [`center`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/center) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/center>
 * @deprecated
 */
export function CENTER(
  props?: CenterElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "center",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
