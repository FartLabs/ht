/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FrameElementProps } from "../../elements/frame.ts";
import { frame } from "../../elements/frame.ts";

/**
 * FRAMEProps are the JSX props for the [`frame`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frame) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frame>
 * @deprecated
 */
export type FRAMEProps = FrameElementProps & { children?: string | string[] };

/**
 * FRAME renders the [`frame`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frame) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frame>
 * @deprecated
 */
export function FRAME(props?: FRAMEProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return frame(rest, ...childArray);
}
