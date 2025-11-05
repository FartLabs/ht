/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * AsideElementProps are the props for the [`aside`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/aside) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/aside>
 */
export interface AsideElementProps extends GlobalAttributes {
}

/**
 * aside renders the [`aside`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/aside) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/aside>
 */
export function aside(
  props?: AsideElementProps,
  ...children: string[]
): string {
  return renderElement("aside", props as AnyProps, false, children);
}
