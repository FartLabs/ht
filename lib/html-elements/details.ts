/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * DetailsElementProps are the props for the [`details`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details>
 */
export interface DetailsElementProps extends GlobalAttributes {
  /**
   * `name` is an attribute of the [`details`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details#name>
   */
  name?: string | undefined;
  /**
   * `open` is an attribute of the [`details`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details#open>
   */
  open?: string | undefined;
}

/**
 * details renders the [`details`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details>
 */
export function details(
  props?: DetailsElementProps,
  ...children: string[]
): string {
  return renderElement("details", props as AnyProps, false, children);
}
