/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { LiElementProps } from "@fartlabs/ht/html/li";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { LiElementProps };

/**
 * LI renders the [`li`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/li) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/li>
 */
export function LI(
  props?: LiElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "li",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
