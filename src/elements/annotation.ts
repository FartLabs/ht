/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * AnnotationElementProps are the props for the [`annotation`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/annotation) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/annotation>
 */
export interface AnnotationElementProps extends GlobalAttributes {
}

/**
 * annotation renders the [`annotation`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/annotation) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/annotation>
 */
export function annotation(
  props?: AnnotationElementProps,
  ...children: string[]
): string {
  return renderElement("annotation", props as AnyProps, false, children);
}
