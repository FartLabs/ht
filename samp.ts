import { renderElement } from "./shared/mod.ts";

/**
 * SampProps are the props for the [`samp`](https://developer.mozilla.org/docs/Web/HTML/Element/samp) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/samp
 */
export interface SampProps {
  children: unknown[] | undefined;
}

/** samp renders the [`samp`](https://developer.mozilla.org/docs/Web/HTML/Element/samp) element. */
export function samp(props: SampProps): string {
  return renderElement("samp", props);
}
