/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * OptionElementProps are the props for the [`option`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option>
 */
export interface OptionElementProps extends GlobalAttributes {
  /**
   * `disabled` is an attribute of the [`option`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option#disabled>
   */
  disabled?: string | undefined;
  /**
   * `label` is an attribute of the [`option`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option#label>
   */
  label?: string | undefined;
  /**
   * `selected` is an attribute of the [`option`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option#selected>
   */
  selected?: string | undefined;
  /**
   * `value` is an attribute of the [`option`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option#value>
   */
  value?: string | undefined;
}

/**
 * option renders the [`option`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option>
 */
export function option(
  props?: OptionElementProps,
  ...children: string[]
): string {
  return renderElement("option", props as AnyProps, false, children);
}
