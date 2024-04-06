import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TitleElementProps are the props for the [`title`](https://developer.mozilla.org/docs/Web/HTML/Element/title) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/title>
 */
export interface TitleElementProps extends GlobalAttributes {
}

/**
 * title renders the [`title`](https://developer.mozilla.org/docs/Web/HTML/Element/title) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/title>
 */
export function title(
  props?: TitleElementProps,
  ...children: string[]
): string {
  return renderElement("title", props as AnyProps, false, children);
}
