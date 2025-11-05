/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * SlotElementProps are the props for the [`slot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot>
 */
export interface SlotElementProps extends GlobalAttributes {
  /**
   * `name` is an attribute of the [`slot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot#name>
   */
  name?: string | undefined;
}

/**
 * slot renders the [`slot`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot>
 */
export function slot(props?: SlotElementProps, ...children: string[]): string {
  return renderElement("slot", props as AnyProps, false, children);
}
