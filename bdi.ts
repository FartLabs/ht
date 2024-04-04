import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** bdi renders the [`bdi`](https://developer.mozilla.org/docs/Web/HTML/Element/bdi) element. */
export function bdi(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("bdi", props);
}
