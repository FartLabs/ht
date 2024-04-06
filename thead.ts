import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TheadElementProps are the props for the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Element/thead) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/thead>
 */
export interface TheadElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Element/thead) element.
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Element/thead) element.
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `char` is an attribute of the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Element/thead) element.
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Element/thead) element.
   * @deprecated
   */
  charoff?: string | undefined;
  /**
   * `valign` is an attribute of the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Element/thead) element.
   * @deprecated
   */
  valign?: string | undefined;
}

/**
 * thead renders the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Element/thead) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/thead>
 */
export function thead(
  props?: TheadElementProps,
  ...children: string[]
): string {
  return renderElement("thead", props as AnyProps, false, children);
}
