/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { CaptionElementProps } from "../../elements/caption.ts";
import { caption } from "../../elements/caption.ts";

/**
 * CAPTIONProps are the JSX props for the [`caption`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption>
 */
export type CAPTIONProps = CaptionElementProps & {
  children?: string | string[];
};

/**
 * CAPTION renders the [`caption`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption>
 */
export function CAPTION(props?: CAPTIONProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return caption(rest, ...childArray);
}
