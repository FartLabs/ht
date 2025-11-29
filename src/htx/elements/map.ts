/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MapElementProps } from "../../elements/map.ts";
import { map } from "../../elements/map.ts";

/**
 * MAPProps are the JSX props for the [`map`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/map) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/map>
 */
export type MAPProps = MapElementProps & { children?: string | string[] };

/**
 * MAP renders the [`map`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/map) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/map>
 */
export function MAP(props?: MAPProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return map(rest, ...childArray);
}
