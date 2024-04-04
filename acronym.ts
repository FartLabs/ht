import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * acronym renders the [`acronym`](https://developer.mozilla.org/docs/Web/HTML/Element/acronym) element.
 * @deprecated
 */
export function acronym(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("acronym", props);
}
