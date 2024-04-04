import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** var_ renders the [`var`](https://developer.mozilla.org/docs/Web/HTML/Element/var) element. */
export function var_(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("var", props);
}
