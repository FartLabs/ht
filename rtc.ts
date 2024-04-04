import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * rtc renders the [`rtc`](https://developer.mozilla.org/docs/Web/HTML/Element/rtc) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/rtc>
 * @deprecated
 */
export function rtc(props?: GlobalAttributes, ...children: string[]): string {
  return renderElement("rtc", props as AnyProps, false, children);
}
