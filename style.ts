import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * StyleElementProps are the props for the [`style`](https://developer.mozilla.org/docs/Web/HTML/Element/style) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/style>
 */
export interface StyleElementProps extends GlobalAttributes {
  /**
   * `blocking` is an attribute of the [`style`](https://developer.mozilla.org/docs/Web/HTML/Element/style) element.
   * @experimental
   */
  blocking?: string | undefined;
  /** `media` is an attribute of the [`style`](https://developer.mozilla.org/docs/Web/HTML/Element/style) element. */
  media?: string | undefined;
  /**
   * `type` is an attribute of the [`style`](https://developer.mozilla.org/docs/Web/HTML/Element/style) element.
   * @deprecated
   */
  type?: string | undefined;
}

/**
 * style renders the [`style`](https://developer.mozilla.org/docs/Web/HTML/Element/style) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/style>
 */
export function style(
  props?: StyleElementProps,
  ...children: string[]
): string {
  return renderElement("style", props as AnyProps, false, children);
}
