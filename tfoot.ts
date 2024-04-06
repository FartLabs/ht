import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TfootElementProps are the props for the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tfoot>
 */
export interface TfootElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element.
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element.
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `char` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element.
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element.
   * @deprecated
   */
  charoff?: string | undefined;
  /**
   * `valign` is an attribute of the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element.
   * @deprecated
   */
  valign?: string | undefined;
}

/**
 * tfoot renders the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tfoot>
 */
export function tfoot(
  props?: TfootElementProps,
  ...children: string[]
): string {
  return renderElement("tfoot", props as AnyProps, false, children);
}
