/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MapElementProps } from "@fartlabs/ht/html/map";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MapElementProps };

/**
 * MAP renders the [`map`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/map) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/map>
 */
export function MAP(
  props?: MapElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "map",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
