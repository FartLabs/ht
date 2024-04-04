import { renderElement } from "./shared/mod.ts";

/**
 * SmallProps are the props for the [`small`](https://developer.mozilla.org/docs/Web/HTML/Element/small) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/small
 */
export interface SmallProps {
  children: unknown[] | undefined;
}

/** small renders the [`small`](https://developer.mozilla.org/docs/Web/HTML/Element/small) element. */
export function small(props: SmallProps): string {
  return renderElement("small", props);
}
