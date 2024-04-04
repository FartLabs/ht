import { renderElement } from "./shared/mod.ts";

/**
 * EmbedProps are the props for the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Element/embed) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/embed
 */
export interface EmbedProps {
  children: unknown[] | undefined;
  /** @deprecated */
  align: string | undefined;
  height: string | undefined;
  /** @deprecated */
  name: string | undefined;
  src: string | undefined;
  type: string | undefined;
  width: string | undefined;
}

/** embed renders the [`embed`](https://developer.mozilla.org/docs/Web/HTML/Element/embed) element. */
export function embed(props: EmbedProps): string {
  return renderElement("embed", props);
}
