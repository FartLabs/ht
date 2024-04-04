import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** b renders the [`b`](https://developer.mozilla.org/docs/Web/HTML/Element/b) element. */
export function b(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("b", props);
}
