import { renderElement } from "./shared/mod.ts";

/**
 * StrikeProps are the props for the [`strike`](https://developer.mozilla.org/docs/Web/HTML/Element/strike) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/strike
 */
export interface StrikeProps {
  children: unknown[] | undefined;
}

/** strike renders the [`strike`](https://developer.mozilla.org/docs/Web/HTML/Element/strike) element. */
export function strike(props: StrikeProps): string {
  return renderElement("strike", props);
}
