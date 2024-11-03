/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * AcronymElementProps are the props for the [`acronym`](https://developer.mozilla.org/docs/Web/HTML/Element/acronym) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/acronym>
 * @deprecated
 */
export interface AcronymElementProps extends GlobalAttributes {
}

/**
 * acronym renders the [`acronym`](https://developer.mozilla.org/docs/Web/HTML/Element/acronym) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/acronym>
 * @deprecated
 */
export function acronym(
  props?: AcronymElementProps,
  ...children: string[]
): string {
  return renderElement("acronym", props as AnyProps, false, children);
}
