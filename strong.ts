import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** strong renders the [`strong`](https://developer.mozilla.org/docs/Web/HTML/Element/strong) element. */
export function strong(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("strong", props);
}
