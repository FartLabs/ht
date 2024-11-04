/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * DivElementProps are the props for the [`div`](https://developer.mozilla.org/docs/Web/HTML/Element/div) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/div>
 */
export interface DivElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`div`](https://developer.mozilla.org/docs/Web/HTML/Element/div) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/div#align>
   * @deprecated
   */
  align?: string | undefined;
}

/**
 * div renders the [`div`](https://developer.mozilla.org/docs/Web/HTML/Element/div) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/div>
 */
export function div(props?: DivElementProps, ...children: string[]): string {
  return renderElement("div", props as AnyProps, false, children);
}
