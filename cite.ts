import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** cite renders the [`cite`](https://developer.mozilla.org/docs/Web/HTML/Element/cite) element. */
export function cite(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("cite", props);
}
