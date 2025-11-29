/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

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
