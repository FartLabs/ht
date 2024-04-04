import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * MenuProps are the props for the [`menu`](https://developer.mozilla.org/docs/Web/HTML/Element/menu) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/menu
 */
export interface MenuProps extends GlobalAttributes {
  /** @deprecated */
  hr_separator?: string | undefined;
  /** @deprecated */
  label?: string | undefined;
  /** @deprecated */
  type_menu?: string | undefined;
}

/** menu renders the [`menu`](https://developer.mozilla.org/docs/Web/HTML/Element/menu) element. */
export function menu(props?: MenuProps & ChildrenProps): string {
  return renderElement("menu", props);
}
