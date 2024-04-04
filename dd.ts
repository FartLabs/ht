import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** dd renders the [`dd`](https://developer.mozilla.org/docs/Web/HTML/Element/dd) element. */
export function dd(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("dd", props);
}
