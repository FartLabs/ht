/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AsideElementProps } from "@fartlabs/ht/html/aside";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { AsideElementProps };

/**
 * ASIDE renders the [`aside`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/aside) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/aside>
 */
export function ASIDE(
  props?: AsideElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "aside",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
