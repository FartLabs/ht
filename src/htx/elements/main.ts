/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MainElementProps } from "../../elements/main.ts";
import { main } from "../../elements/main.ts";

/**
 * MAINProps are the JSX props for the [`main`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/main) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/main>
 */
export type MAINProps = MainElementProps & { children?: string | string[] };

/**
 * MAIN renders the [`main`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/main) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/main>
 */
export function MAIN(props?: MAINProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return main(rest, ...childArray);
}
