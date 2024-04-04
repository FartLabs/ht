import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** dt renders the [`dt`](https://developer.mozilla.org/docs/Web/HTML/Element/dt) element. */
export function dt(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("dt", props);
}
