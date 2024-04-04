import { renderElement } from "./shared/mod.ts";

/**
 * MarkProps are the props for the [`mark`](https://developer.mozilla.org/docs/Web/HTML/Element/mark) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/mark
 */
export interface MarkProps {
  children: unknown[] | undefined;
}

/** mark renders the [`mark`](https://developer.mozilla.org/docs/Web/HTML/Element/mark) element. */
export function mark(props: MarkProps): string {
  return renderElement("mark", props);
}
