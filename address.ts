import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * address renders the [`address`](https://developer.mozilla.org/docs/Web/HTML/Element/address) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/address>
 */
export function address(
  props?: GlobalAttributes,
  ...children: string[]
): string {
  return renderElement("address", props as AnyProps, false, children);
}
