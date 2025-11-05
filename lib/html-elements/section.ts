/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * SectionElementProps are the props for the [`section`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/section) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/section>
 */
export interface SectionElementProps extends GlobalAttributes {
}

/**
 * section renders the [`section`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/section) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/section>
 */
export function section(
  props?: SectionElementProps,
  ...children: string[]
): string {
  return renderElement("section", props as AnyProps, false, children);
}
