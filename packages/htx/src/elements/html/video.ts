/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { VideoElementProps } from "@fartlabs/ht/html/video";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { VideoElementProps };

/**
 * VIDEO renders the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video>
 */
export function VIDEO(
  props?: VideoElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "video",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
