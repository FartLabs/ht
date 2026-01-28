/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ProgressElementProps } from "@fartlabs/ht/html/progress";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { ProgressElementProps };

/**
 * PROGRESS renders the [`progress`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress>
 */
export function PROGRESS(
  props?: ProgressElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "progress",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
