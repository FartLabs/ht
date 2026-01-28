/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { OutputElementProps } from "@fartlabs/ht/html/output";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { OutputElementProps };

/**
 * OUTPUT renders the [`output`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output>
 */
export function OUTPUT(
  props?: OutputElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "output",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
