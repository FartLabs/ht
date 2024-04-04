import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** samp renders the [`samp`](https://developer.mozilla.org/docs/Web/HTML/Element/samp) element. */
export function samp(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("samp", props);
}
