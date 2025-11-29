/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FencedframeElementProps } from "../../elements/fencedframe.ts";
import { fencedframe } from "../../elements/fencedframe.ts";

/**
 * FENCEDFRAMEProps are the JSX props for the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe>
 * @experimental
 */
export type FENCEDFRAMEProps = FencedframeElementProps & {
  children?: string | string[];
};

/**
 * FENCEDFRAME renders the [`fencedframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fencedframe>
 * @experimental
 */
export function FENCEDFRAME(props?: FENCEDFRAMEProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return fencedframe(rest, ...childArray);
}
