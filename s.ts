import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** s renders the [`s`](https://developer.mozilla.org/docs/Web/HTML/Element/s) element. */
export function s(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("s", props);
}
