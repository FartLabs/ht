/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * KbdElementProps are the props for the [`kbd`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/kbd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/kbd>
 */
export interface KbdElementProps extends GlobalAttributes {
}

/**
 * kbd renders the [`kbd`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/kbd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/kbd>
 */
export function kbd(props?: KbdElementProps, ...children: string[]): string {
  return renderElement("kbd", props as AnyProps, false, children);
}
