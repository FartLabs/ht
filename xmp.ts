import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * xmp renders the [`xmp`](https://developer.mozilla.org/docs/Web/HTML/Element/xmp) element.
 * @deprecated
 */
export function xmp(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("xmp", props);
}
