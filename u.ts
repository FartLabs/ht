import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * UElementProps are the props for the [`u`](https://developer.mozilla.org/docs/Web/HTML/Element/u) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/u>
 */
export interface UElementProps extends GlobalAttributes {
}

/**
 * u renders the [`u`](https://developer.mozilla.org/docs/Web/HTML/Element/u) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/u>
 */
export function u(props?: UElementProps, ...children: string[]): string {
  return renderElement("u", props as AnyProps, false, children);
}
