/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * MainElementProps are the props for the [`main`](https://developer.mozilla.org/docs/Web/HTML/Element/main) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/main>
 */
export interface MainElementProps extends GlobalAttributes {
}

/**
 * main renders the [`main`](https://developer.mozilla.org/docs/Web/HTML/Element/main) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/main>
 */
export function main(props?: MainElementProps, ...children: string[]): string {
  return renderElement("main", props as AnyProps, false, children);
}
