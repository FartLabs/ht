import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** em renders the [`em`](https://developer.mozilla.org/docs/Web/HTML/Element/em) element. */
export function em(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("em", props);
}
