/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { FigcaptionElementProps } from "../../elements/figcaption.ts";
import { figcaption } from "../../elements/figcaption.ts";

/**
 * FIGCAPTIONProps are the JSX props for the [`figcaption`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figcaption) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figcaption>
 */
export type FIGCAPTIONProps = FigcaptionElementProps & {
  children?: string | string[];
};

/**
 * FIGCAPTION renders the [`figcaption`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figcaption) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figcaption>
 */
export function FIGCAPTION(props?: FIGCAPTIONProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return figcaption(rest, ...childArray);
}
