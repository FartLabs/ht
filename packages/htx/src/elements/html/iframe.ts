/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { IframeElementProps } from "@fartlabs/ht/html/iframe";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { IframeElementProps };

/**
 * IFRAME renders the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe>
 */
export function IFRAME(
  props?: IframeElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "iframe",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
