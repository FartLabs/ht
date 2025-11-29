/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AcronymElementProps } from "../../elements/acronym.ts";
import { acronym } from "../../elements/acronym.ts";

/**
 * ACRONYMProps are the JSX props for the [`acronym`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/acronym) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/acronym>
 * @deprecated
 */
export type ACRONYMProps = AcronymElementProps & {
  children?: string | string[];
};

/**
 * ACRONYM renders the [`acronym`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/acronym) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/acronym>
 * @deprecated
 */
export function ACRONYM(props?: ACRONYMProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return acronym(rest, ...childArray);
}
