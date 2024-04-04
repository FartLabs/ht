import { renderElement } from "./shared/mod.ts";

/**
 * MenuProps are the props for the [`menu`](https://developer.mozilla.org/docs/Web/HTML/Element/menu) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/menu
 */
export interface MenuProps {
  children: unknown[] | undefined;
  /** @deprecated */
  hr_separator: string | undefined;
  /** @deprecated */
  label: string | undefined;
  /** @deprecated */
  type_menu: string | undefined;
}

/** menu renders the [`menu`](https://developer.mozilla.org/docs/Web/HTML/Element/menu) element. */
export function menu(props: MenuProps): string {
  return renderElement("menu", props);
}
