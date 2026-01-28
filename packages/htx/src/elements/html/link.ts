/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { LinkElementProps } from "@fartlabs/ht/html/link";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { LinkElementProps };

/**
 * LINK renders the [`link`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link>
 */
export function LINK(
  props?: LinkElementProps & { children?: string | string[] | undefined },
): string {
  const { children: _propsChildren, ...rest } = props ?? {};
  return renderElement("link", rest as AnyProps, true);
}
