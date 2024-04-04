import { renderElement } from "./shared/mod.ts";

/**
 * UProps are the props for the [`u`](https://developer.mozilla.org/docs/Web/HTML/Element/u) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/u
 */
export interface UProps {
  children: unknown[] | undefined;
}

/** u renders the [`u`](https://developer.mozilla.org/docs/Web/HTML/Element/u) element. */
export function u(props: UProps): string {
  return renderElement("u", props);
}
