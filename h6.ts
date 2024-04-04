import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** h6 renders the [`h6`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element. */
export function h6(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("h6", props);
}
