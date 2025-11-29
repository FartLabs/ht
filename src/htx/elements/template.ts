/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TemplateElementProps } from "../../elements/template.ts";
import { template } from "../../elements/template.ts";

/**
 * TEMPLATEProps are the JSX props for the [`template`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template>
 */
export type TEMPLATEProps = TemplateElementProps & {
  children?: string | string[];
};

/**
 * TEMPLATE renders the [`template`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template>
 */
export function TEMPLATE(props?: TEMPLATEProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return template(rest, ...childArray);
}
