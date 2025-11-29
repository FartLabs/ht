/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AbbrElementProps } from "../../elements/abbr.ts";
import { abbr } from "../../elements/abbr.ts";

/**
 * ABBRProps are the JSX props for the [`abbr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/abbr) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/abbr>
 */
export type ABBRProps = AbbrElementProps & { children?: string | string[] };

/**
 * ABBR renders the [`abbr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/abbr) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/abbr>
 */
export function ABBR(props?: ABBRProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return abbr(rest, ...childArray);
}
