import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * header renders the [`header`](https://developer.mozilla.org/docs/Web/HTML/Element/header) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/header>
 */
export function header(
  props?: GlobalAttributes,
  ...children: string[]
): string {
  return renderElement("header", props as AnyProps, false, children);
}
