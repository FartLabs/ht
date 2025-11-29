/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * LiElementProps are the props for the [`li`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/li) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/li>
 */
export interface LiElementProps extends GlobalAttributes {
  /**
   * `type` is an attribute of the [`li`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/li) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/li#type>
   * @deprecated
   */
  type?: string | undefined;
  /**
   * `value` is an attribute of the [`li`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/li) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/li#value>
   */
  value?: string | undefined;
}

/**
 * li renders the [`li`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/li) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/li>
 */
export function li(props?: LiElementProps, ...children: string[]): string {
  return renderElement("li", props as AnyProps, false, children);
}
