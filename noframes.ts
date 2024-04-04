import { renderElement } from "./shared/mod.ts";

/**
 * NoframesProps are the props for the [`noframes`](https://developer.mozilla.org/docs/Web/HTML/Element/noframes) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/noframes
 */
export interface NoframesProps {
  children: unknown[] | undefined;
}

/** noframes renders the [`noframes`](https://developer.mozilla.org/docs/Web/HTML/Element/noframes) element. */
export function noframes(props: NoframesProps): string {
  return renderElement("noframes", props);
}
