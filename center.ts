import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * center renders the [`center`](https://developer.mozilla.org/docs/Web/HTML/Element/center) element.
 * @deprecated
 */
export function center(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("center", props);
}
