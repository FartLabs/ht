/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SectionElementProps } from "../../elements/section.ts";
import { section } from "../../elements/section.ts";

/**
 * SECTIONProps are the JSX props for the [`section`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/section) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/section>
 */
export type SECTIONProps = SectionElementProps & {
  children?: string | string[];
};

/**
 * SECTION renders the [`section`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/section) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/section>
 */
export function SECTION(props?: SECTIONProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return section(rest, ...childArray);
}
