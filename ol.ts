import { renderElement } from "./shared/mod.ts";

/**
 * OlProps are the props for the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Element/ol) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/ol
 */
export interface OlProps {
  children: unknown[] | undefined;
  /** @deprecated */
  compact: string | undefined;
  reversed: string | undefined;
  start: string | undefined;
  type: string | undefined;
}

/** ol renders the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Element/ol) element. */
export function ol(props: OlProps): string {
  return renderElement("ol", props);
}
