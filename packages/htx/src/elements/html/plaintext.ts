/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { PlaintextElementProps } from "@fartlabs/ht/html/plaintext";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { PlaintextElementProps };

/**
 * PLAINTEXT renders the [`plaintext`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/plaintext) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/plaintext>
 * @deprecated
 */
export function PLAINTEXT(
  props?: PlaintextElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "plaintext",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
