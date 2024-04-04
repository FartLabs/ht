import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** bdi renders the [`bdi`](https://developer.mozilla.org/docs/Web/HTML/Element/bdi) element. */
export function bdi(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("bdi", props);
}
