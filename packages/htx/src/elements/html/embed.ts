/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { EmbedElementProps } from "@fartlabs/ht/html/embed";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { EmbedElementProps };

/**
 * EMBED renders the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed>
 */
export function EMBED(
  props?: EmbedElementProps & { children?: string | string[] | undefined },
): string {
  const { children: _propsChildren, ...rest } = props ?? {};
  return renderElement("embed", rest as AnyProps, true);
}
