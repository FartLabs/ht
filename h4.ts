import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** h4 renders the [`h4`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element. */
export function h4(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("h4", props);
}
