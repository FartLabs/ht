import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** header renders the [`header`](https://developer.mozilla.org/docs/Web/HTML/Element/header) element. */
export function header(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("header", props);
}
