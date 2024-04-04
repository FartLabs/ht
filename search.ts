import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** search renders the [`search`](https://developer.mozilla.org/docs/Web/HTML/Element/search) element. */
export function search(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("search", props);
}
