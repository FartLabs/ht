import { renderElement } from "./shared/mod.ts";

/**
 * ArticleProps are the props for the [`article`](https://developer.mozilla.org/docs/Web/HTML/Element/article) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/article
 */
export interface ArticleProps {
  children: unknown[] | undefined;
}

/** article renders the [`article`](https://developer.mozilla.org/docs/Web/HTML/Element/article) element. */
export function article(props: ArticleProps): string {
  return renderElement("article", props);
}
