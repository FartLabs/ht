import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** b renders the [`b`](https://developer.mozilla.org/docs/Web/HTML/Element/b) element. */
export function b(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("b", props);
}
