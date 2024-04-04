import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * main renders the [`main`](https://developer.mozilla.org/docs/Web/HTML/Element/main) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/main>
 */
export function main(props?: GlobalAttributes, ...children: string[]): string {
  return renderElement("main", props as AnyProps, false, children);
}
