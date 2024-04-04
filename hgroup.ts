import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** hgroup renders the [`hgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/hgroup) element. */
export function hgroup(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("hgroup", props);
}
