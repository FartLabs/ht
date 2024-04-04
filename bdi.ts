import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * bdi renders the [`bdi`](https://developer.mozilla.org/docs/Web/HTML/Element/bdi) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/bdi>
 */
export function bdi(props?: GlobalAttributes, ...children: string[]): string {
  return renderElement("bdi", props as AnyProps, false, children);
}
