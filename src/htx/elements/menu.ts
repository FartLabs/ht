/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MenuElementProps } from "../../elements/menu.ts";
import { menu } from "../../elements/menu.ts";

/**
 * MENUProps are the JSX props for the [`menu`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/menu) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/menu>
 */
export type MENUProps = MenuElementProps & { children?: string | string[] };

/**
 * MENU renders the [`menu`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/menu) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/menu>
 */
export function MENU(props?: MENUProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return menu(rest, ...childArray);
}
