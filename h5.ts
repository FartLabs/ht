import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** h5 renders the [`h5`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element. */
export function h5(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("h5", props);
}
