/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { HeaderElementProps } from "@fartlabs/ht/html/header";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { HeaderElementProps };

/**
 * HEADER renders the [`header`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/header) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/header>
 */
export function HEADER(
  props?: HeaderElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "header",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
