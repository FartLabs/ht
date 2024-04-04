import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** footer renders the [`footer`](https://developer.mozilla.org/docs/Web/HTML/Element/footer) element. */
export function footer(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("footer", props);
}
