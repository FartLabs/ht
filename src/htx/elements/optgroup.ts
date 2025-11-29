/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { OptgroupElementProps } from "../../elements/optgroup.ts";
import { optgroup } from "../../elements/optgroup.ts";

/**
 * OPTGROUPProps are the JSX props for the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup>
 */
export type OPTGROUPProps = OptgroupElementProps & {
  children?: string | string[];
};

/**
 * OPTGROUP renders the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup>
 */
export function OPTGROUP(props?: OPTGROUPProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return optgroup(rest, ...childArray);
}
