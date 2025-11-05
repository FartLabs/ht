/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * SummaryElementProps are the props for the [`summary`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/summary) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/summary>
 */
export interface SummaryElementProps extends GlobalAttributes {
}

/**
 * summary renders the [`summary`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/summary) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/summary>
 */
export function summary(
  props?: SummaryElementProps,
  ...children: string[]
): string {
  return renderElement("summary", props as AnyProps, false, children);
}
