/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * AnnotationXmlElementProps are the props for the [`annotation-xml`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/annotation-xml) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/annotation-xml>
 */
export interface AnnotationXmlElementProps extends GlobalAttributes {
}

/**
 * annotationXml renders the [`annotation-xml`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/annotation-xml) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/annotation-xml>
 */
export function annotationXml(
  props?: AnnotationXmlElementProps,
  ...children: string[]
): string {
  return renderElement("annotation-xml", props as AnyProps, false, children);
}
