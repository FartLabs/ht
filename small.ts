import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * SmallElementProps are the props for the [`small`](https://developer.mozilla.org/docs/Web/HTML/Element/small) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/small>
 */
export type SmallElementProps = GlobalAttributes;

/**
 * small renders the [`small`](https://developer.mozilla.org/docs/Web/HTML/Element/small) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/small>
 */
export function small(
  props?: SmallElementProps,
  ...children: string[]
): string {
  return renderElement("small", props as AnyProps, false, children);
}
