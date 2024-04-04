import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * MenuProps are the props for the [`menu`](https://developer.mozilla.org/docs/Web/HTML/Element/menu) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/menu>
 */
export interface MenuProps extends GlobalAttributes {
  /** @deprecated */
  label?: string | undefined;
}

/**
 * menu renders the [`menu`](https://developer.mozilla.org/docs/Web/HTML/Element/menu) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/menu>
 */
export function menu(props?: MenuProps, ...children: string[]): string {
  return renderElement("menu", props as AnyProps, false, children);
}
