import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * HeaderElementProps are the props for the [`header`](https://developer.mozilla.org/docs/Web/HTML/Element/header) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/header>
 */
export interface HeaderElementProps extends GlobalAttributes {
}

/**
 * header renders the [`header`](https://developer.mozilla.org/docs/Web/HTML/Element/header) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/header>
 */
export function header(
  props?: HeaderElementProps,
  ...children: string[]
): string {
  return renderElement("header", props as AnyProps, false, children);
}
