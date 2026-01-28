/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { PreElementProps } from "@fartlabs/ht/html/pre";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { PreElementProps };

/**
 * PRE renders the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre>
 */
export function PRE(
  props?: PreElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "pre",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
