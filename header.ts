import { renderElement } from "./shared/mod.ts";

/**
 * HeaderProps are the props for the [`header`](https://developer.mozilla.org/docs/Web/HTML/Element/header) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/header
 */
export interface HeaderProps {
  children: unknown[] | undefined;
}

/** header renders the [`header`](https://developer.mozilla.org/docs/Web/HTML/Element/header) element. */
export function header(props: HeaderProps): string {
  return renderElement("header", props);
}
