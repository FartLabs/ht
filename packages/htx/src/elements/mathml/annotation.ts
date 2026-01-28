/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnnotationElementProps } from "@fartlabs/ht/mathml/annotation";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { AnnotationElementProps };

/**
 * ANNOTATION renders the [`annotation`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/annotation) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/annotation>
 */
export function ANNOTATION(
  props?: AnnotationElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "annotation",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
