/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeMergeNodeElementProps are the props for the [`feMergeNode`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMergeNode) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMergeNode>
 */
export interface FeMergeNodeElementProps extends GlobalAttributes {
  /**
   * `in` is an attribute of the [`feMergeNode`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMergeNode) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMergeNode#in>
   */
  in?: string | undefined;
}

/**
 * feMergeNode renders the [`feMergeNode`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMergeNode) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feMergeNode>
 */
export function feMergeNode(
  props?: FeMergeNodeElementProps,
  ...children: string[]
): string {
  return renderElement("feMergeNode", props as AnyProps, false, children);
}
