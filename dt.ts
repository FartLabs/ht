import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * dt renders the [`dt`](https://developer.mozilla.org/docs/Web/HTML/Element/dt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dt>
 */
export function dt(props?: GlobalAttributes, ...children: string[]): string {
  return renderElement("dt", props as AnyProps, false, children);
}
