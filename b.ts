import { renderElement } from "./shared/mod.ts";

/**
 * BProps are the props for the [`b`](https://developer.mozilla.org/docs/Web/HTML/Element/b) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/b
 */
export interface BProps {
  children: unknown[] | undefined;
}

/** b renders the [`b`](https://developer.mozilla.org/docs/Web/HTML/Element/b) element. */
export function b(props: BProps): string {
  return renderElement("b", props);
}
