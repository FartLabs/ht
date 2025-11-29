/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ButtonElementProps } from "../../elements/button.ts";
import { button } from "../../elements/button.ts";

/**
 * BUTTONProps are the JSX props for the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button>
 */
export type BUTTONProps = ButtonElementProps & { children?: string | string[] };

/**
 * BUTTON renders the [`button`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button>
 */
export function BUTTON(props?: BUTTONProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return button(rest, ...childArray);
}
