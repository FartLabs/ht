/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { InputElementProps } from "@fartlabs/ht/html/input";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { InputElementProps };

/**
 * INPUT renders the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input>
 */
export function INPUT(
  props?: InputElementProps & { children?: string | string[] | undefined },
): string {
  const { children: _propsChildren, ...rest } = props ?? {};
  return renderElement("input", rest as unknown as AnyProps, true);
}
