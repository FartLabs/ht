/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { IframeElementProps } from "../../elements/iframe.ts";
import { iframe } from "../../elements/iframe.ts";

/**
 * IFRAMEProps are the JSX props for the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe>
 */
export type IFRAMEProps = IframeElementProps & { children?: string | string[] };

/**
 * IFRAME renders the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe>
 */
export function IFRAME(props?: IFRAMEProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return iframe(rest, ...childArray);
}
