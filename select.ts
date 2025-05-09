/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * SelectElementProps are the props for the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select>
 */
export interface SelectElementProps extends GlobalAttributes {
  /**
   * `autocomplete` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select#autocomplete>
   */
  autocomplete?: string | undefined;
  /**
   * `disabled` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select#disabled>
   */
  disabled?: string | undefined;
  /**
   * `form` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select#form>
   */
  form?: string | undefined;
  /**
   * `multiple` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select#multiple>
   */
  multiple?: string | undefined;
  /**
   * `name` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select#name>
   */
  name?: string | undefined;
  /**
   * `required` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select#required>
   */
  required?: string | undefined;
  /**
   * `size` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select#size>
   */
  size?: string | undefined;
}

/**
 * select renders the [`select`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select>
 */
export function select(
  props?: SelectElementProps,
  ...children: string[]
): string {
  return renderElement("select", props as AnyProps, false, children);
}
