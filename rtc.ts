import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * rtc renders the [`rtc`](https://developer.mozilla.org/docs/Web/HTML/Element/rtc) element.
 * @deprecated
 */
export function rtc(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("rtc", props);
}
