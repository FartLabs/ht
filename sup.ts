import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** sup renders the [`sup`](https://developer.mozilla.org/docs/Web/HTML/Element/sup) element. */
export function sup(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("sup", props);
}
