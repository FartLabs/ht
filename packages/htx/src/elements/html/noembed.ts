/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { NoembedElementProps } from "@fartlabs/ht/html/noembed";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { NoembedElementProps };

/**
 * NOEMBED renders the [`noembed`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noembed) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noembed>
 * @deprecated
 */
export function NOEMBED(
  props?: NoembedElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "noembed",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
