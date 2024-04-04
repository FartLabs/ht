import { renderElement } from "./shared/mod.ts";

/**
 * PlaintextProps are the props for the [`plaintext`](https://developer.mozilla.org/docs/Web/HTML/Element/plaintext) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/plaintext
 */
export interface PlaintextProps {
  children: unknown[] | undefined;
}

/** plaintext renders the [`plaintext`](https://developer.mozilla.org/docs/Web/HTML/Element/plaintext) element. */
export function plaintext(props: PlaintextProps): string {
  return renderElement("plaintext", props);
}
