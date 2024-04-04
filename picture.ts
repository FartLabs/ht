import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** picture renders the [`picture`](https://developer.mozilla.org/docs/Web/HTML/Element/picture) element. */
export function picture(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("picture", props);
}
