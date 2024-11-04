/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * MenuElementProps are the props for the [`menu`](https://developer.mozilla.org/docs/Web/HTML/Element/menu) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/menu>
 */
export interface MenuElementProps extends GlobalAttributes {
  /**
   * `label` is an attribute of the [`menu`](https://developer.mozilla.org/docs/Web/HTML/Element/menu) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/menu#label>
   * @deprecated
   */
  label?: string | undefined;
}

/**
 * menu renders the [`menu`](https://developer.mozilla.org/docs/Web/HTML/Element/menu) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/menu>
 */
export function menu(props?: MenuElementProps, ...children: string[]): string {
  return renderElement("menu", props as AnyProps, false, children);
}
