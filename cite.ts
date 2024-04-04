import { renderElement } from "./shared/mod.ts";

/**
 * CiteProps are the props for the [`cite`](https://developer.mozilla.org/docs/Web/HTML/Element/cite) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/cite
 */
export interface CiteProps {
  children: unknown[] | undefined;
}

/** cite renders the [`cite`](https://developer.mozilla.org/docs/Web/HTML/Element/cite) element. */
export function cite(props: CiteProps): string {
  return renderElement("cite", props);
}
