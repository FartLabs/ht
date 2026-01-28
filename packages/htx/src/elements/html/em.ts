/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { EmElementProps } from "@fartlabs/ht/html/em";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { EmElementProps };

/**
 * EM renders the [`em`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/em) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/em>
 */
export function EM(
  props?: EmElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "em",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
