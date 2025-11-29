/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FormElementProps } from "../../elements/form.ts";
import { form } from "../../elements/form.ts";

/**
 * FORMProps are the JSX props for the [`form`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form>
 */
export type FORMProps = FormElementProps & { children?: string | string[] };

/**
 * FORM renders the [`form`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form>
 */
export function FORM(props?: FORMProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return form(rest, ...childArray);
}
