import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** span renders the [`span`](https://developer.mozilla.org/docs/Web/HTML/Element/span) element. */
export function span(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("span", props);
}
