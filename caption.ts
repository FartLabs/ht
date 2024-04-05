import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * CaptionElementProps are the props for the [`caption`](https://developer.mozilla.org/docs/Web/HTML/Element/caption) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/caption>
 */
export interface CaptionElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`caption`](https://developer.mozilla.org/docs/Web/HTML/Element/caption) element.
   * @deprecated
   */
  align?: string | undefined;
}

/**
 * caption renders the [`caption`](https://developer.mozilla.org/docs/Web/HTML/Element/caption) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/caption>
 */
export function caption(
  props?: CaptionElementProps,
  ...children: string[]
): string {
  return renderElement("caption", props as AnyProps, false, children);
}
