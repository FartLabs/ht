import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * rtc renders the [`rtc`](https://developer.mozilla.org/docs/Web/HTML/Element/rtc) element.
 * @deprecated
 */
export function rtc(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("rtc", props);
}
