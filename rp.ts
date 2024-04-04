import { renderElement } from "./shared/mod.ts";

/**
 * RpProps are the props for the [`rp`](https://developer.mozilla.org/docs/Web/HTML/Element/rp) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/rp
 */
export interface RpProps {
  children: unknown[] | undefined;
}

/** rp renders the [`rp`](https://developer.mozilla.org/docs/Web/HTML/Element/rp) element. */
export function rp(props: RpProps): string {
  return renderElement("rp", props);
}
