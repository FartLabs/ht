import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * picture renders the [`picture`](https://developer.mozilla.org/docs/Web/HTML/Element/picture) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/picture>
 */
export function picture(
  props?: GlobalAttributes,
  ...children: string[]
): string {
  return renderElement("picture", props as AnyProps, false, children);
}
