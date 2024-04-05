import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * SummaryElementProps are the props for the [`summary`](https://developer.mozilla.org/docs/Web/HTML/Element/summary) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/summary>
 */
export type SummaryElementProps = GlobalAttributes;

/**
 * summary renders the [`summary`](https://developer.mozilla.org/docs/Web/HTML/Element/summary) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/summary>
 */
export function summary(
  props?: SummaryElementProps,
  ...children: string[]
): string {
  return renderElement("summary", props as AnyProps, false, children);
}
