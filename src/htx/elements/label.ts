/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { LabelElementProps } from "../../elements/label.ts";
import { label } from "../../elements/label.ts";

/**
 * LABELProps are the JSX props for the [`label`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label>
 */
export type LABELProps = LabelElementProps & { children?: string | string[] };

/**
 * LABEL renders the [`label`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label>
 */
export function LABEL(props?: LABELProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return label(rest, ...childArray);
}
