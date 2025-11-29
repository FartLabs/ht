/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { BaseElementProps } from "../../elements/base.ts";
import { base } from "../../elements/base.ts";

/**
 * BASEProps are the JSX props for the [`base`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/base) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/base>
 */
export type BASEProps = BaseElementProps & { children?: string | string[] };

/**
 * BASE renders the [`base`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/base) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/base>
 */
export function BASE(props?: BASEProps): string {
  const { children: _children, ...rest } = props ?? {};
  return base(rest);
}
