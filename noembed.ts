import { renderElement } from "./shared/mod.ts";

/**
 * NoembedProps are the props for the [`noembed`](https://developer.mozilla.org/docs/Web/HTML/Element/noembed) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/noembed
 */
export interface NoembedProps {
  children: unknown[] | undefined;
}

/** noembed renders the [`noembed`](https://developer.mozilla.org/docs/Web/HTML/Element/noembed) element. */
export function noembed(props: NoembedProps): string {
  return renderElement("noembed", props);
}
