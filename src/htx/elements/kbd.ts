/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { KbdElementProps } from "../../elements/kbd.ts";
import { kbd } from "../../elements/kbd.ts";

/**
 * KBDProps are the JSX props for the [`kbd`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/kbd) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/kbd>
 */
export type KBDProps = KbdElementProps & { children?: string | string[] };

/**
 * KBD renders the [`kbd`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/kbd) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/kbd>
 */
export function KBD(props?: KBDProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return kbd(rest, ...childArray);
}
