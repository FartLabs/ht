import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * nobr renders the [`nobr`](https://developer.mozilla.org/docs/Web/HTML/Element/nobr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/nobr>
 * @deprecated
 */
export function nobr(props?: GlobalAttributes, ...children: string[]): string {
  return renderElement("nobr", props as AnyProps, false, children);
}
