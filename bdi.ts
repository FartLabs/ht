import { renderElement } from "./shared/mod.ts";

/**
 * BdiProps are the props for the [`bdi`](https://developer.mozilla.org/docs/Web/HTML/Element/bdi) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/bdi
 */
export interface BdiProps {
  children: unknown[] | undefined;
}

/** bdi renders the [`bdi`](https://developer.mozilla.org/docs/Web/HTML/Element/bdi) element. */
export function bdi(props: BdiProps): string {
  return renderElement("bdi", props);
}
