/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { NoembedElementProps } from "../../elements/noembed.ts";
import { noembed } from "../../elements/noembed.ts";

/**
 * NOEMBEDProps are the JSX props for the [`noembed`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noembed) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noembed>
 * @deprecated
 */
export type NOEMBEDProps = NoembedElementProps & {
  children?: string | string[];
};

/**
 * NOEMBED renders the [`noembed`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noembed) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noembed>
 * @deprecated
 */
export function NOEMBED(props?: NOEMBEDProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return noembed(rest, ...childArray);
}
