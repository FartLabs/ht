import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * NavElementProps are the props for the [`nav`](https://developer.mozilla.org/docs/Web/HTML/Element/nav) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/nav>
 */
export type NavElementProps = GlobalAttributes;

/**
 * nav renders the [`nav`](https://developer.mozilla.org/docs/Web/HTML/Element/nav) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/nav>
 */
export function nav(props?: NavElementProps, ...children: string[]): string {
  return renderElement("nav", props as AnyProps, false, children);
}
