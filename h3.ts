import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** h3 renders the [`h3`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element. */
export function h3(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("h3", props);
}
