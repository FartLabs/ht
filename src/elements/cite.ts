/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * CiteElementProps are the props for the [`cite`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/cite) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/cite>
 */
export interface CiteElementProps extends GlobalAttributes {
}

/**
 * cite renders the [`cite`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/cite) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/cite>
 */
export function cite(props?: CiteElementProps, ...children: string[]): string {
  return renderElement("cite", props as AnyProps, false, children);
}
