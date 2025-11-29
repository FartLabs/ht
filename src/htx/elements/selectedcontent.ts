/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SelectedcontentElementProps } from "../../elements/selectedcontent.ts";
import { selectedcontent } from "../../elements/selectedcontent.ts";

/**
 * SELECTEDCONTENTProps are the JSX props for the [`selectedcontent`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/selectedcontent) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/selectedcontent>
 * @experimental
 */
export type SELECTEDCONTENTProps = SelectedcontentElementProps & {
  children?: string | string[];
};

/**
 * SELECTEDCONTENT renders the [`selectedcontent`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/selectedcontent) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/selectedcontent>
 * @experimental
 */
export function SELECTEDCONTENT(props?: SELECTEDCONTENTProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return selectedcontent(rest, ...childArray);
}
