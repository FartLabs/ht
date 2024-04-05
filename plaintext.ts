import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * PlaintextElementProps are the props for the [`plaintext`](https://developer.mozilla.org/docs/Web/HTML/Element/plaintext) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/plaintext>
 * @deprecated
 */
export type PlaintextElementProps = GlobalAttributes;

/**
 * plaintext renders the [`plaintext`](https://developer.mozilla.org/docs/Web/HTML/Element/plaintext) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/plaintext>
 * @deprecated
 */
export function plaintext(
  props?: PlaintextElementProps,
  ...children: string[]
): string {
  return renderElement("plaintext", props as AnyProps, false, children);
}
