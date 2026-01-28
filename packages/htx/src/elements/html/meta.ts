/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MetaElementProps } from "@fartlabs/ht/html/meta";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MetaElementProps };

/**
 * META renders the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta>
 */
export function META(
  props?: MetaElementProps & { children?: string | string[] | undefined },
): string {
  const { children: _propsChildren, ...rest } = props ?? {};
  return renderElement("meta", rest as AnyProps, true);
}
