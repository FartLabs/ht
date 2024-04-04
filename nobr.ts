import { renderElement } from "./shared/mod.ts";

/**
 * NobrProps are the props for the [`nobr`](https://developer.mozilla.org/docs/Web/HTML/Element/nobr) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/nobr
 */
export interface NobrProps {
  children: unknown[] | undefined;
}

/** nobr renders the [`nobr`](https://developer.mozilla.org/docs/Web/HTML/Element/nobr) element. */
export function nobr(props: NobrProps): string {
  return renderElement("nobr", props);
}
