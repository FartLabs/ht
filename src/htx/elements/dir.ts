/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DirElementProps } from "../../elements/dir.ts";
import { dir } from "../../elements/dir.ts";

/**
 * DIRProps are the JSX props for the [`dir`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir>
 * @deprecated
 */
export type DIRProps = DirElementProps & { children?: string | string[] };

/**
 * DIR renders the [`dir`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dir>
 * @deprecated
 */
export function DIR(props?: DIRProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return dir(rest, ...childArray);
}
