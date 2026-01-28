/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { HeadElementProps } from "@fartlabs/ht/html/head";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { HeadElementProps };

/**
 * HEAD renders the [`head`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/head) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/head>
 */
export function HEAD(
  props?: HeadElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "head",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
