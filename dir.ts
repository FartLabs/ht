/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * DirElementProps are the props for the [`dir`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir>
 * @deprecated
 */
export interface DirElementProps extends GlobalAttributes {
  /**
   * `compact` is an attribute of the [`dir`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir#compact>
   * @deprecated
   */
  compact?: string | undefined;
}

/**
 * dir renders the [`dir`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir>
 * @deprecated
 */
export function dir(props?: DirElementProps, ...children: string[]): string {
  return renderElement("dir", props as AnyProps, false, children);
}
