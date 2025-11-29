/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SpanElementProps } from "../../elements/span.ts";
import { span } from "../../elements/span.ts";

/**
 * SPANProps are the JSX props for the [`span`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/span) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/span>
 */
export type SPANProps = SpanElementProps & { children?: string | string[] };

/**
 * SPAN renders the [`span`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/span) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/span>
 */
export function SPAN(props?: SPANProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return span(rest, ...childArray);
}
