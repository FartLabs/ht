/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SummaryElementProps } from "@fartlabs/ht/html/summary";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { SummaryElementProps };

/**
 * SUMMARY renders the [`summary`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/summary) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/summary>
 */
export function SUMMARY(
  props?: SummaryElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "summary",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
