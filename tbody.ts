import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TbodyElementProps are the props for the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Element/tbody) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tbody>
 */
export interface TbodyElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Element/tbody) element.
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Element/tbody) element.
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `char` is an attribute of the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Element/tbody) element.
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Element/tbody) element.
   * @deprecated
   */
  charoff?: string | undefined;
  /**
   * `valign` is an attribute of the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Element/tbody) element.
   * @deprecated
   */
  valign?: string | undefined;
}

/**
 * tbody renders the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Element/tbody) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tbody>
 */
export function tbody(
  props?: TbodyElementProps,
  ...children: string[]
): string {
  return renderElement("tbody", props as AnyProps, false, children);
}
