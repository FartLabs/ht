import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** ruby renders the [`ruby`](https://developer.mozilla.org/docs/Web/HTML/Element/ruby) element. */
export function ruby(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("ruby", props);
}
