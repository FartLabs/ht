/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FramesetElementProps } from "../../elements/frameset.ts";
import { frameset } from "../../elements/frameset.ts";

/**
 * FRAMESETProps are the JSX props for the [`frameset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frameset) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frameset>
 * @deprecated
 */
export type FRAMESETProps = FramesetElementProps & {
  children?: string | string[];
};

/**
 * FRAMESET renders the [`frameset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frameset) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/frameset>
 * @deprecated
 */
export function FRAMESET(props?: FRAMESETProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return frameset(rest, ...childArray);
}
