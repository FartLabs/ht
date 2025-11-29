/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { PictureElementProps } from "../../elements/picture.ts";
import { picture } from "../../elements/picture.ts";

/**
 * PICTUREProps are the JSX props for the [`picture`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/picture) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/picture>
 */
export type PICTUREProps = PictureElementProps & {
  children?: string | string[];
};

/**
 * PICTURE renders the [`picture`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/picture) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/picture>
 */
export function PICTURE(props?: PICTUREProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return picture(rest, ...childArray);
}
