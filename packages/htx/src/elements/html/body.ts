/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { BodyElementProps } from "@fartlabs/ht/html/body";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { BodyElementProps };

/**
 * BODY renders the [`body`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body>
 */
export function BODY(
  props?: BodyElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "body",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
