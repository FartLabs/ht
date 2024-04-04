import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** abbr renders the [`abbr`](https://developer.mozilla.org/docs/Web/HTML/Element/abbr) element. */
export function abbr(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("abbr", props);
}
