import { renderElement } from "./shared/mod.ts";

/**
 * SearchProps are the props for the [`search`](https://developer.mozilla.org/docs/Web/HTML/Element/search) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/search
 */
export interface SearchProps {
  children: unknown[] | undefined;
}

/** search renders the [`search`](https://developer.mozilla.org/docs/Web/HTML/Element/search) element. */
export function search(props: SearchProps): string {
  return renderElement("search", props);
}
