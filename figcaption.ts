import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** figcaption renders the [`figcaption`](https://developer.mozilla.org/docs/Web/HTML/Element/figcaption) element. */
export function figcaption(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("figcaption", props);
}
