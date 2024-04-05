import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ThElementProps are the props for the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/th>
 */
export interface ThElementProps extends GlobalAttributes {
  /** `abbr` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element. */
  abbr?: string | undefined;
  /**
   * `align` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `axis` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
   * @deprecated
   */
  axis?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `char` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
   * @deprecated
   */
  charoff?: string | undefined;
  /** `colspan` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element. */
  colspan?: string | undefined;
  /** `headers` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element. */
  headers?: string | undefined;
  /** `rowspan` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element. */
  rowspan?: string | undefined;
  /** `scope` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element. */
  scope?: string | undefined;
  /**
   * `valign` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
   * @deprecated
   */
  valign?: string | undefined;
  /**
   * `width` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
   * @deprecated
   */
  width?: string | undefined;
}

/**
 * th renders the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/th>
 */
export function th(props?: ThElementProps, ...children: string[]): string {
  return renderElement("th", props as AnyProps, false, children);
}
