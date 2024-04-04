import { renderElement } from "./shared/mod.ts";

/**
 * MainProps are the props for the [`main`](https://developer.mozilla.org/docs/Web/HTML/Element/main) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/main
 */
export interface MainProps {
  children: unknown[] | undefined;
}

/** main renders the [`main`](https://developer.mozilla.org/docs/Web/HTML/Element/main) element. */
export function main(props: MainProps): string {
  return renderElement("main", props);
}
