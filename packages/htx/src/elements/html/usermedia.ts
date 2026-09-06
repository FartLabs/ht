/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { UsermediaElementProps } from "@fartlabs/ht/html/usermedia";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { UsermediaElementProps };

/**
 * USERMEDIA renders the [`usermedia`](undefined) element.
 * @experimental
 */
export function USERMEDIA(
  props?: UsermediaElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "usermedia",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
