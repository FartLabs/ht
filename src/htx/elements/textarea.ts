/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TextareaElementProps } from "../../elements/textarea.ts";
import { textarea } from "../../elements/textarea.ts";

/**
 * TEXTAREAProps are the JSX props for the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea>
 */
export type TEXTAREAProps = TextareaElementProps & {
  children?: string | string[];
};

/**
 * TEXTAREA renders the [`textarea`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea>
 */
export function TEXTAREA(props?: TEXTAREAProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return textarea(rest, ...childArray);
}
