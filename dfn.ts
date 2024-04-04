import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** dfn renders the [`dfn`](https://developer.mozilla.org/docs/Web/HTML/Element/dfn) element. */
export function dfn(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("dfn", props);
}
