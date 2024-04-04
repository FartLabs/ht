import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** code renders the [`code`](https://developer.mozilla.org/docs/Web/HTML/Element/code) element. */
export function code(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("code", props);
}
