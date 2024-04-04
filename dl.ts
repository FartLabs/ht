import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** dl renders the [`dl`](https://developer.mozilla.org/docs/Web/HTML/Element/dl) element. */
export function dl(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("dl", props);
}
