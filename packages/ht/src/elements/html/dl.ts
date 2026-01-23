/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * DlElementProps are the props for the [`dl`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dl) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dl>
 */
export interface DlElementProps extends GlobalAttributes {
}

/**
 * dl renders the [`dl`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dl) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dl>
 */
export function dl(props?: DlElementProps, ...children: string[]): string {
  return renderElement("dl", props as AnyProps, false, children);
}
