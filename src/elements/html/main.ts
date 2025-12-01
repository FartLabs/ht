/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MainElementProps are the props for the [`main`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/main) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/main>
 */
export interface MainElementProps extends GlobalAttributes {
}

/**
 * main renders the [`main`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/main) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/main>
 */
export function main(props?: MainElementProps, ...children: string[]): string {
  return renderElement("main", props as AnyProps, false, children);
}
