/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ArticleElementProps } from "../../elements/article.ts";
import { article } from "../../elements/article.ts";

/**
 * ARTICLEProps are the JSX props for the [`article`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/article) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/article>
 */
export type ARTICLEProps = ArticleElementProps & {
  children?: string | string[];
};

/**
 * ARTICLE renders the [`article`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/article) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/article>
 */
export function ARTICLE(props?: ARTICLEProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return article(rest, ...childArray);
}
