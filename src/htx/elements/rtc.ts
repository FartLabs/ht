/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { RtcElementProps } from "../../elements/rtc.ts";
import { rtc } from "../../elements/rtc.ts";

/**
 * RTCProps are the JSX props for the [`rtc`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rtc) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rtc>
 * @deprecated
 */
export type RTCProps = RtcElementProps & { children?: string | string[] };

/**
 * RTC renders the [`rtc`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rtc) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rtc>
 * @deprecated
 */
export function RTC(props?: RTCProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return rtc(rest, ...childArray);
}
