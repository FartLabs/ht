/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AudioElementProps } from "@fartlabs/ht/html/audio";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { AudioElementProps };

/**
 * AUDIO renders the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio>
 */
export function AUDIO(
  props?: AudioElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "audio",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
