/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { HgroupElementProps } from "../../elements/hgroup.ts";
import { hgroup } from "../../elements/hgroup.ts";

/**
 * HGROUPProps are the JSX props for the [`hgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hgroup) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hgroup>
 */
export type HGROUPProps = HgroupElementProps & { children?: string | string[] };

/**
 * HGROUP renders the [`hgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hgroup) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hgroup>
 */
export function HGROUP(props?: HGROUPProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return hgroup(rest, ...childArray);
}
