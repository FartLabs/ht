import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** main renders the [`main`](https://developer.mozilla.org/docs/Web/HTML/Element/main) element. */
export function main(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("main", props);
}
