import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** datalist renders the [`datalist`](https://developer.mozilla.org/docs/Web/HTML/Element/datalist) element. */
export function datalist(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("datalist", props);
}
