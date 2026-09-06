/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { InstallElementProps } from "@fartlabs/ht/html/install";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { InstallElementProps };

/**
 * INSTALL renders the [`install`](undefined) element.
 * @experimental
 */
export function INSTALL(
  props?: InstallElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "install",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
