import { renderElement } from "./shared/mod.ts";

/**
 * AbbrProps are the props for the [`abbr`](https://developer.mozilla.org/docs/Web/HTML/Element/abbr) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/abbr
 */
export interface AbbrProps {
  children: unknown[] | undefined;
}

/** abbr renders the [`abbr`](https://developer.mozilla.org/docs/Web/HTML/Element/abbr) element. */
export function abbr(props: AbbrProps): string {
  return renderElement("abbr", props);
}
