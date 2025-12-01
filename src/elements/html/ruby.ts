/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * RubyElementProps are the props for the [`ruby`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ruby) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ruby>
 */
export interface RubyElementProps extends GlobalAttributes {
}

/**
 * ruby renders the [`ruby`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ruby) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ruby>
 */
export function ruby(props?: RubyElementProps, ...children: string[]): string {
  return renderElement("ruby", props as AnyProps, false, children);
}
