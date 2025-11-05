/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * HtmlElementProps are the props for the [`html`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html>
 */
export interface HtmlElementProps extends GlobalAttributes {
  /**
   * `version` is an attribute of the [`html`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html#version>
   * @deprecated
   */
  version?: string | undefined;
  /**
   * `xmlns` is an attribute of the [`html`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html#xmlns>
   */
  xmlns?: string | undefined;
}

/**
 * html renders the [`html`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html>
 */
export function html(props?: HtmlElementProps, ...children: string[]): string {
  return renderElement("html", props as AnyProps, false, children);
}
