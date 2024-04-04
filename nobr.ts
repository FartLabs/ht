import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * nobr renders the [`nobr`](https://developer.mozilla.org/docs/Web/HTML/Element/nobr) element.
 * @deprecated
 */
export function nobr(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("nobr", props);
}
