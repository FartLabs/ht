/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { CodeElementProps } from "@fartlabs/ht/html/code";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { CodeElementProps };

/**
 * CODE renders the [`code`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/code) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/code>
 */
export function CODE(
  props?: CodeElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "code",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
