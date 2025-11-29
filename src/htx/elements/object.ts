/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ObjectElementProps } from "../../elements/object.ts";
import { object } from "../../elements/object.ts";

/**
 * OBJECTProps are the JSX props for the [`object`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object>
 */
export type OBJECTProps = ObjectElementProps & { children?: string | string[] };

/**
 * OBJECT renders the [`object`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object>
 */
export function OBJECT(props?: OBJECTProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return object(rest, ...childArray);
}
