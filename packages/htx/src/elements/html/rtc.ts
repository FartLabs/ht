/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { RtcElementProps } from "@fartlabs/ht/html/rtc";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { RtcElementProps };

/**
 * RTC renders the [`rtc`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rtc) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rtc>
 * @deprecated
 */
export function RTC(
  props?: RtcElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "rtc",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
