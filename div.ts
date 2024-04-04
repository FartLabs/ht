import { renderElement } from "./shared/mod.ts";

/**
 * DivProps are the props for the [`div`](https://developer.mozilla.org/docs/Web/HTML/Element/div) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/div
 */
export interface DivProps {
  children: unknown[] | undefined;
  /** @deprecated */
  align: string | undefined;
}

/** div renders the [`div`](https://developer.mozilla.org/docs/Web/HTML/Element/div) element. */
export function div(props: DivProps): string {
  return renderElement("div", props);
}
