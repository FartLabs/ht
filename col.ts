import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ColElementProps are the props for the [`col`](https://developer.mozilla.org/docs/Web/HTML/Element/col) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/col>
 */
export interface ColElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`col`](https://developer.mozilla.org/docs/Web/HTML/Element/col) element.
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `char` is an attribute of the [`col`](https://developer.mozilla.org/docs/Web/HTML/Element/col) element.
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`col`](https://developer.mozilla.org/docs/Web/HTML/Element/col) element.
   * @deprecated
   */
  charoff?: string | undefined;
  /** `span` is an attribute of the [`col`](https://developer.mozilla.org/docs/Web/HTML/Element/col) element. */
  span?: string | undefined;
  /**
   * `valign` is an attribute of the [`col`](https://developer.mozilla.org/docs/Web/HTML/Element/col) element.
   * @deprecated
   */
  valign?: string | undefined;
  /**
   * `width` is an attribute of the [`col`](https://developer.mozilla.org/docs/Web/HTML/Element/col) element.
   * @deprecated
   */
  width?: string | undefined;
}

/**
 * col renders the [`col`](https://developer.mozilla.org/docs/Web/HTML/Element/col) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/col>
 */
export function col(props?: ColElementProps): string {
  return renderElement("col", props as AnyProps, true);
}
