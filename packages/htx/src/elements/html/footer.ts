/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FooterElementProps } from "@fartlabs/ht/html/footer";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { FooterElementProps };

/**
 * FOOTER renders the [`footer`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/footer) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/footer>
 */
export function FOOTER(
  props?: FooterElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "footer",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
