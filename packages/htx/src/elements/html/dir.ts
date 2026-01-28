/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DirElementProps } from "@fartlabs/ht/html/dir";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { DirElementProps };

/**
 * DIR renders the [`dir`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir>
 * @deprecated
 */
export function DIR(
  props?: DirElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "dir",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
