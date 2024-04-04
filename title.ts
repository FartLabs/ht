import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** title renders the [`title`](https://developer.mozilla.org/docs/Web/HTML/Element/title) element. */
export function title(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("title", props);
}
