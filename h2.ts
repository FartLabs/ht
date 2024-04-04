import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** h2 renders the [`h2`](https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements) element. */
export function h2(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("h2", props);
}
