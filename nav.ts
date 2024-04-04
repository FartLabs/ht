import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** nav renders the [`nav`](https://developer.mozilla.org/docs/Web/HTML/Element/nav) element. */
export function nav(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("nav", props);
}
