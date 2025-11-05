/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * PlaintextElementProps are the props for the [`plaintext`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/plaintext) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/plaintext>
 * @deprecated
 */
export interface PlaintextElementProps extends GlobalAttributes {
}

/**
 * plaintext renders the [`plaintext`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/plaintext) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/plaintext>
 * @deprecated
 */
export function plaintext(
  props?: PlaintextElementProps,
  ...children: string[]
): string {
  return renderElement("plaintext", props as AnyProps, false, children);
}
