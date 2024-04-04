import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** kbd renders the [`kbd`](https://developer.mozilla.org/docs/Web/HTML/Element/kbd) element. */
export function kbd(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("kbd", props);
}
