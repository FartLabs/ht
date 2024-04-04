import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** article renders the [`article`](https://developer.mozilla.org/docs/Web/HTML/Element/article) element. */
export function article(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("article", props);
}
