import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** sub renders the [`sub`](https://developer.mozilla.org/docs/Web/HTML/Element/sub) element. */
export function sub(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("sub", props);
}
