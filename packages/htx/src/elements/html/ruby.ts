/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { RubyElementProps } from "@fartlabs/ht/html/ruby";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { RubyElementProps };

/**
 * RUBY renders the [`ruby`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ruby) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ruby>
 */
export function RUBY(
  props?: RubyElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "ruby",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
