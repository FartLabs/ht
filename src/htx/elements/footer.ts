/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FooterElementProps } from "../../elements/footer.ts";
import { footer } from "../../elements/footer.ts";

/**
 * FOOTERProps are the JSX props for the [`footer`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/footer) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/footer>
 */
export type FOOTERProps = FooterElementProps & { children?: string | string[] };

/**
 * FOOTER renders the [`footer`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/footer) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/footer>
 */
export function FOOTER(props?: FOOTERProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return footer(rest, ...childArray);
}
