/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TheadElementProps are the props for the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead>
 */
export interface TheadElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead#bgcolor>
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `char` is an attribute of the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead#char>
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead#charoff>
   * @deprecated
   */
  charoff?: string | undefined;
  /**
   * `valign` is an attribute of the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead#valign>
   * @deprecated
   */
  valign?: string | undefined;
}

/**
 * thead renders the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead>
 */
export function thead(
  props?: TheadElementProps,
  ...children: string[]
): string {
  return renderElement("thead", props as AnyProps, false, children);
}
