/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { PathElementProps } from "@fartlabs/ht/svg/path";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { PathElementProps };

/**
 * PATH renders the [`path`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/path) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/path>
 */
export function PATH(
  props?: PathElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "path",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
