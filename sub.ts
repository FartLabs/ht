import { renderElement } from "./shared/mod.ts";

/**
 * SubProps are the props for the [`sub`](https://developer.mozilla.org/docs/Web/HTML/Element/sub) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/sub
 */
export interface SubProps {
  children: unknown[] | undefined;
}

/** sub renders the [`sub`](https://developer.mozilla.org/docs/Web/HTML/Element/sub) element. */
export function sub(props: SubProps): string {
  return renderElement("sub", props);
}
