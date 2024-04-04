import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/** picture renders the [`picture`](https://developer.mozilla.org/docs/Web/HTML/Element/picture) element. */
export function picture(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("picture", props);
}
