import { renderElement } from "./shared/mod.ts";

/**
 * UlProps are the props for the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Element/ul) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/ul
 */
export interface UlProps {
  children: unknown[] | undefined;
  /** @deprecated */
  compact: string | undefined;
  /** @deprecated */
  type: string | undefined;
}

/** ul renders the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Element/ul) element. */
export function ul(props: UlProps): string {
  return renderElement("ul", props);
}
