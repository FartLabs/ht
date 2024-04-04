import { renderElement } from "./shared/mod.ts";

/**
 * RbProps are the props for the [`rb`](https://developer.mozilla.org/docs/Web/HTML/Element/rb) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/rb
 */
export interface RbProps {
  children: unknown[] | undefined;
}

/** rb renders the [`rb`](https://developer.mozilla.org/docs/Web/HTML/Element/rb) element. */
export function rb(props: RbProps): string {
  return renderElement("rb", props);
}
