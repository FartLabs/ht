import { renderElement } from "./shared/mod.ts";

/**
 * TtProps are the props for the [`tt`](https://developer.mozilla.org/docs/Web/HTML/Element/tt) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/tt
 */
export interface TtProps {
  children: unknown[] | undefined;
}

/** tt renders the [`tt`](https://developer.mozilla.org/docs/Web/HTML/Element/tt) element. */
export function tt(props: TtProps): string {
  return renderElement("tt", props);
}
