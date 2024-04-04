import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** i renders the [`i`](https://developer.mozilla.org/docs/Web/HTML/Element/i) element. */
export function i(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("i", props);
}
