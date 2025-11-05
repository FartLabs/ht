/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * OptgroupElementProps are the props for the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup>
 */
export interface OptgroupElementProps extends GlobalAttributes {
  /**
   * `disabled` is an attribute of the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup#disabled>
   */
  disabled?: string | undefined;
  /**
   * `label` is an attribute of the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup#label>
   */
  label?: string | undefined;
}

/**
 * optgroup renders the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup>
 */
export function optgroup(
  props?: OptgroupElementProps,
  ...children: string[]
): string {
  return renderElement("optgroup", props as AnyProps, false, children);
}
