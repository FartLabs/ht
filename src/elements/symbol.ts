/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * SymbolElementProps are the props for the [`symbol`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/symbol) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/symbol>
 */
export interface SymbolElementProps extends GlobalAttributes {
  /**
   * `preserveAspectRatio` is an attribute of the [`symbol`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/symbol) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/symbol#preserveAspectRatio>
   */
  preserveAspectRatio?: string | undefined;
  /**
   * `viewBox` is an attribute of the [`symbol`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/symbol) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/symbol#viewBox>
   */
  viewBox?: string | undefined;
}

/**
 * symbol renders the [`symbol`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/symbol) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/symbol>
 */
export function symbol(
  props?: SymbolElementProps,
  ...children: string[]
): string {
  return renderElement("symbol", props as AnyProps, false, children);
}
