import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** rt renders the [`rt`](https://developer.mozilla.org/docs/Web/HTML/Element/rt) element. */
export function rt(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("rt", props);
}
