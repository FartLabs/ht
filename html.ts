/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * HtmlElementProps are the props for the [`html`](https://developer.mozilla.org/docs/Web/HTML/Element/html) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/html>
 */
export interface HtmlElementProps extends GlobalAttributes {
  /**
   * `version` is an attribute of the [`html`](https://developer.mozilla.org/docs/Web/HTML/Element/html) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/html#version>
   * @deprecated
   */
  version?: string | undefined;
  /**
   * `xmlns` is an attribute of the [`html`](https://developer.mozilla.org/docs/Web/HTML/Element/html) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/html#xmlns>
   */
  xmlns?: string | undefined;
}

/**
 * html renders the [`html`](https://developer.mozilla.org/docs/Web/HTML/Element/html) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/html>
 */
export function html(props?: HtmlElementProps, ...children: string[]): string {
  return renderElement("html", props as AnyProps, false, children);
}
