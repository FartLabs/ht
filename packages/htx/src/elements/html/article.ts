/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ArticleElementProps } from "@fartlabs/ht/html/article";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { ArticleElementProps };

/**
 * ARTICLE renders the [`article`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/article) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/article>
 */
export function ARTICLE(
  props?: ArticleElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "article",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
