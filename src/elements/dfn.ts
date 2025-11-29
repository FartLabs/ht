/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * DfnElementProps are the props for the [`dfn`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dfn) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dfn>
 */
export interface DfnElementProps extends GlobalAttributes {
}

/**
 * dfn renders the [`dfn`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dfn) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dfn>
 */
export function dfn(props?: DfnElementProps, ...children: string[]): string {
  return renderElement("dfn", props as AnyProps, false, children);
}
