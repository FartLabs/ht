/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FieldsetElementProps } from "../../elements/fieldset.ts";
import { fieldset } from "../../elements/fieldset.ts";

/**
 * FIELDSETProps are the JSX props for the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset>
 */
export type FIELDSETProps = FieldsetElementProps & {
  children?: string | string[];
};

/**
 * FIELDSET renders the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset>
 */
export function FIELDSET(props?: FIELDSETProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return fieldset(rest, ...childArray);
}
