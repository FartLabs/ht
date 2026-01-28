/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { OptgroupElementProps } from "@fartlabs/ht/html/optgroup";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { OptgroupElementProps };

/**
 * OPTGROUP renders the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup>
 */
export function OPTGROUP(
  props?: OptgroupElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "optgroup",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
