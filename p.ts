import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** p renders the [`p`](https://developer.mozilla.org/docs/Web/HTML/Element/p) element. */
export function p(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("p", props);
}
