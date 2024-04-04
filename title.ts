import { renderElement } from "./shared/mod.ts";

/**
 * TitleProps are the props for the [`title`](https://developer.mozilla.org/docs/Web/HTML/Element/title) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/title
 */
export interface TitleProps {
  children: unknown[] | undefined;
}

/** title renders the [`title`](https://developer.mozilla.org/docs/Web/HTML/Element/title) element. */
export function title(props: TitleProps): string {
  return renderElement("title", props);
}
