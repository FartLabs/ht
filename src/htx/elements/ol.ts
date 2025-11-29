/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { OlElementProps } from "../../elements/ol.ts";
import { ol } from "../../elements/ol.ts";

/**
 * OLProps are the JSX props for the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol>
 */
export type OLProps = OlElementProps & { children?: string | string[] };

/**
 * OL renders the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol>
 */
export function OL(props?: OLProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return ol(rest, ...childArray);
}
