/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TextPathElementProps } from "@fartlabs/ht/svg/textPath";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { TextPathElementProps };

/**
 * TEXTPATH renders the [`textPath`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/textPath>
 */
export function TEXTPATH(
  props?: TextPathElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "textPath",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
