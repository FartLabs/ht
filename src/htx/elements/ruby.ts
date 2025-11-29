/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { RubyElementProps } from "../../elements/ruby.ts";
import { ruby } from "../../elements/ruby.ts";

/**
 * RUBYProps are the JSX props for the [`ruby`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ruby) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ruby>
 */
export type RUBYProps = RubyElementProps & { children?: string | string[] };

/**
 * RUBY renders the [`ruby`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ruby) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ruby>
 */
export function RUBY(props?: RUBYProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return ruby(rest, ...childArray);
}
