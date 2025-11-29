/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { CanvasElementProps } from "../../elements/canvas.ts";
import { canvas } from "../../elements/canvas.ts";

/**
 * CANVASProps are the JSX props for the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas>
 */
export type CANVASProps = CanvasElementProps & { children?: string | string[] };

/**
 * CANVAS renders the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas>
 */
export function CANVAS(props?: CANVASProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return canvas(rest, ...childArray);
}
