import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * portal renders the [`portal`](https://developer.mozilla.org/docs/Web/HTML/Element/portal) element.
 * @experimental
 */
export function portal(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("portal", props);
}
