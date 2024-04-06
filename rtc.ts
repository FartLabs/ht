import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * RtcElementProps are the props for the [`rtc`](https://developer.mozilla.org/docs/Web/HTML/Element/rtc) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/rtc>
 * @deprecated
 */
export interface RtcElementProps extends GlobalAttributes {
}

/**
 * rtc renders the [`rtc`](https://developer.mozilla.org/docs/Web/HTML/Element/rtc) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/rtc>
 * @deprecated
 */
export function rtc(props?: RtcElementProps, ...children: string[]): string {
  return renderElement("rtc", props as AnyProps, false, children);
}
