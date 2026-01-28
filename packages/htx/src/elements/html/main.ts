/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MainElementProps } from "@fartlabs/ht/html/main";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MainElementProps };

/**
 * MAIN renders the [`main`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/main) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/main>
 */
export function MAIN(
  props?: MainElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "main",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
