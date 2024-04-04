import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * u renders the [`u`](https://developer.mozilla.org/docs/Web/HTML/Element/u) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/u>
 */
export function u(props?: GlobalAttributes, ...children: string[]): string {
  return renderElement("u", props as AnyProps, false, children);
}
