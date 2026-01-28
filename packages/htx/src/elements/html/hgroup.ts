/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { HgroupElementProps } from "@fartlabs/ht/html/hgroup";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { HgroupElementProps };

/**
 * HGROUP renders the [`hgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hgroup>
 */
export function HGROUP(
  props?: HgroupElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "hgroup",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
