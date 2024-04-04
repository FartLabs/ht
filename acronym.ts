import { renderElement } from "./shared/mod.ts";

/**
 * AcronymProps are the props for the [`acronym`](https://developer.mozilla.org/docs/Web/HTML/Element/acronym) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/acronym
 */
export interface AcronymProps {
  children: unknown[] | undefined;
}

/** acronym renders the [`acronym`](https://developer.mozilla.org/docs/Web/HTML/Element/acronym) element. */
export function acronym(props: AcronymProps): string {
  return renderElement("acronym", props);
}
