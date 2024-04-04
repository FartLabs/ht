import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * UlProps are the props for the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Element/ul) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/ul>
 */
export interface UlProps extends GlobalAttributes {
  /** @deprecated */
  compact?: string | undefined;
  /** @deprecated */
  type?: string | undefined;
}

/**
 * ul renders the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Element/ul) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/ul>
 */
export function ul(props?: UlProps, ...children: string[]): string {
  return renderElement("ul", props as AnyProps, false, children);
}
