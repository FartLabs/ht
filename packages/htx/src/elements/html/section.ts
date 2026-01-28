/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SectionElementProps } from "@fartlabs/ht/html/section";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { SectionElementProps };

/**
 * SECTION renders the [`section`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/section) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/section>
 */
export function SECTION(
  props?: SectionElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "section",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
