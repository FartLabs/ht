import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/** u renders the [`u`](https://developer.mozilla.org/docs/Web/HTML/Element/u) element. */
export function u(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("u", props);
}
