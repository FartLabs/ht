import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** bdo renders the [`bdo`](https://developer.mozilla.org/docs/Web/HTML/Element/bdo) element. */
export function bdo(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("bdo", props);
}
