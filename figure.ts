import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** figure renders the [`figure`](https://developer.mozilla.org/docs/Web/HTML/Element/figure) element. */
export function figure(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("figure", props);
}
