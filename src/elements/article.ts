/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * ArticleElementProps are the props for the [`article`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/article) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/article>
 */
export interface ArticleElementProps extends GlobalAttributes {
}

/**
 * article renders the [`article`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/article) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/article>
 */
export function article(
  props?: ArticleElementProps,
  ...children: string[]
): string {
  return renderElement("article", props as AnyProps, false, children);
}
