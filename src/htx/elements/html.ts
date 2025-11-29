/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { HtmlElementProps } from "../../elements/html.ts";
import { html } from "../../elements/html.ts";

/**
 * HTMLProps are the JSX props for the [`html`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html>
 */
export type HTMLProps = HtmlElementProps & { children?: string | string[] };

/**
 * HTML renders the [`html`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html>
 */
export function HTML(props?: HTMLProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return html(rest, ...childArray);
}
