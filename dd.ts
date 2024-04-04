import { renderElement } from "./shared/mod.ts";

/**
 * DdProps are the props for the [`dd`](https://developer.mozilla.org/docs/Web/HTML/Element/dd) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/dd
 */
export interface DdProps {
  children: unknown[] | undefined;
}

/** dd renders the [`dd`](https://developer.mozilla.org/docs/Web/HTML/Element/dd) element. */
export function dd(props: DdProps): string {
  return renderElement("dd", props);
}
