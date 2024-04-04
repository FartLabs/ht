import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** mark renders the [`mark`](https://developer.mozilla.org/docs/Web/HTML/Element/mark) element. */
export function mark(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("mark", props);
}
