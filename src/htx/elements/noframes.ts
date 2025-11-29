/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { NoframesElementProps } from "../../elements/noframes.ts";
import { noframes } from "../../elements/noframes.ts";

/**
 * NOFRAMESProps are the JSX props for the [`noframes`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noframes) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noframes>
 * @deprecated
 */
export type NOFRAMESProps = NoframesElementProps & {
  children?: string | string[];
};

/**
 * NOFRAMES renders the [`noframes`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noframes) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noframes>
 * @deprecated
 */
export function NOFRAMES(props?: NOFRAMESProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return noframes(rest, ...childArray);
}
