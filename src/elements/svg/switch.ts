/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * SwitchElementProps are the props for the [`switch`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/switch) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/switch>
 */
export interface SwitchElementProps extends GlobalAttributes {
  /**
   * `systemLanguage` is an attribute of the [`switch`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/switch) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/switch#systemLanguage>
   */
  systemLanguage?: string | undefined;
}

/**
 * switch_ renders the [`switch`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/switch) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/switch>
 */
export function switch_(
  props?: SwitchElementProps,
  ...children: string[]
): string {
  return renderElement("switch", props as AnyProps, false, children);
}
