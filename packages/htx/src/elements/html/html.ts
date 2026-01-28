/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { HtmlElementProps } from "@fartlabs/ht/html/html";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { HtmlElementProps };

/**
 * HTML renders the [`html`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html>
 */
export function HTML(
  props?: HtmlElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "html",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
