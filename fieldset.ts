/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * FieldsetElementProps are the props for the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset>
 */
export interface FieldsetElementProps extends GlobalAttributes {
  /**
   * `disabled` is an attribute of the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset#disabled>
   */
  disabled?: string | undefined;
  /**
   * `form` is an attribute of the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset#form>
   */
  form?: string | undefined;
  /**
   * `name` is an attribute of the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset#name>
   */
  name?: string | undefined;
}

/**
 * fieldset renders the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset>
 */
export function fieldset(
  props?: FieldsetElementProps,
  ...children: string[]
): string {
  return renderElement("fieldset", props as AnyProps, false, children);
}
