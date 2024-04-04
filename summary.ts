import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** summary renders the [`summary`](https://developer.mozilla.org/docs/Web/HTML/Element/summary) element. */
export function summary(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("summary", props);
}
