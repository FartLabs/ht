import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * PortalElementProps are the props for the [`portal`](https://developer.mozilla.org/docs/Web/HTML/Element/portal) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/portal>
 * @experimental
 */
export type PortalElementProps = GlobalAttributes;

/**
 * portal renders the [`portal`](https://developer.mozilla.org/docs/Web/HTML/Element/portal) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/portal>
 * @experimental
 */
export function portal(
  props?: PortalElementProps,
  ...children: string[]
): string {
  return renderElement("portal", props as AnyProps, false, children);
}
