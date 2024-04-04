import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** nav renders the [`nav`](https://developer.mozilla.org/docs/Web/HTML/Element/nav) element. */
export function nav(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("nav", props);
}
