/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SymbolElementProps } from "@fartlabs/ht/svg/symbol";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { SymbolElementProps };

/**
 * SYMBOL renders the [`symbol`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/symbol) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/symbol>
 */
export function SYMBOL(
  props?: SymbolElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "symbol",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
