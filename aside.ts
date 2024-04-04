import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** aside renders the [`aside`](https://developer.mozilla.org/docs/Web/HTML/Element/aside) element. */
export function aside(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("aside", props);
}
