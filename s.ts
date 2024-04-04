import { renderElement } from "./shared/mod.ts";

/**
 * SProps are the props for the [`s`](https://developer.mozilla.org/docs/Web/HTML/Element/s) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/s
 */
export interface SProps {
  children: unknown[] | undefined;
}

/** s renders the [`s`](https://developer.mozilla.org/docs/Web/HTML/Element/s) element. */
export function s(props: SProps): string {
  return renderElement("s", props);
}
