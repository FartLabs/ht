import { renderElement } from "./shared/mod.ts";

/**
 * NoscriptProps are the props for the [`noscript`](https://developer.mozilla.org/docs/Web/HTML/Element/noscript) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/noscript
 */
export interface NoscriptProps {
  children: unknown[] | undefined;
}

/** noscript renders the [`noscript`](https://developer.mozilla.org/docs/Web/HTML/Element/noscript) element. */
export function noscript(props: NoscriptProps): string {
  return renderElement("noscript", props);
}
