/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ArticleElementProps are the props for the [`article`](https://developer.mozilla.org/docs/Web/HTML/Element/article) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/article>
 */
export interface ArticleElementProps extends GlobalAttributes {
}

/**
 * article renders the [`article`](https://developer.mozilla.org/docs/Web/HTML/Element/article) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/article>
 */
export function article(
  props?: ArticleElementProps,
  ...children: string[]
): string {
  return renderElement("article", props as AnyProps, false, children);
}
