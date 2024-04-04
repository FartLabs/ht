import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * tt renders the [`tt`](https://developer.mozilla.org/docs/Web/HTML/Element/tt) element.
 * @deprecated
 */
export function tt(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("tt", props);
}
