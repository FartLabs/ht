import { renderElement } from "./shared/mod.ts";

/**
 * NavProps are the props for the [`nav`](https://developer.mozilla.org/docs/Web/HTML/Element/nav) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/nav
 */
export interface NavProps {
  children: unknown[] | undefined;
}

/** nav renders the [`nav`](https://developer.mozilla.org/docs/Web/HTML/Element/nav) element. */
export function nav(props: NavProps): string {
  return renderElement("nav", props);
}
