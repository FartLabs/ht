import { renderElement } from "./shared/mod.ts";

/**
 * BdoProps are the props for the [`bdo`](https://developer.mozilla.org/docs/Web/HTML/Element/bdo) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/bdo
 */
export interface BdoProps {
  children: unknown[] | undefined;
}

/** bdo renders the [`bdo`](https://developer.mozilla.org/docs/Web/HTML/Element/bdo) element. */
export function bdo(props: BdoProps): string {
  return renderElement("bdo", props);
}
