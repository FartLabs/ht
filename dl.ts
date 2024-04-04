import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** dl renders the [`dl`](https://developer.mozilla.org/docs/Web/HTML/Element/dl) element. */
export function dl(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("dl", props);
}
