/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TitleElementProps } from "../../elements/title.ts";
import { title } from "../../elements/title.ts";

/**
 * TITLEProps are the JSX props for the [`title`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/title) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/title>
 */
export type TITLEProps = TitleElementProps & { children?: string | string[] };

/**
 * TITLE renders the [`title`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/title) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/title>
 */
export function TITLE(props?: TITLEProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return title(rest, ...childArray);
}
