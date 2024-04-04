import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** ruby renders the [`ruby`](https://developer.mozilla.org/docs/Web/HTML/Element/ruby) element. */
export function ruby(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("ruby", props);
}
