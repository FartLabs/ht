/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * DtElementProps are the props for the [`dt`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dt>
 */
export interface DtElementProps extends GlobalAttributes {
}

/**
 * dt renders the [`dt`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dt) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dt>
 */
export function dt(props?: DtElementProps, ...children: string[]): string {
  return renderElement("dt", props as AnyProps, false, children);
}
