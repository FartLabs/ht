import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * noembed renders the [`noembed`](https://developer.mozilla.org/docs/Web/HTML/Element/noembed) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/noembed>
 * @deprecated
 */
export function noembed(
  props?: GlobalAttributes,
  ...children: string[]
): string {
  return renderElement("noembed", props as AnyProps, false, children);
}
