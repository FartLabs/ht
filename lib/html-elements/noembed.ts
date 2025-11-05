/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * NoembedElementProps are the props for the [`noembed`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noembed) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noembed>
 * @deprecated
 */
export interface NoembedElementProps extends GlobalAttributes {
}

/**
 * noembed renders the [`noembed`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noembed) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noembed>
 * @deprecated
 */
export function noembed(
  props?: NoembedElementProps,
  ...children: string[]
): string {
  return renderElement("noembed", props as AnyProps, false, children);
}
