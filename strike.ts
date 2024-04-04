import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * strike renders the [`strike`](https://developer.mozilla.org/docs/Web/HTML/Element/strike) element.
 * @deprecated
 */
export function strike(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("strike", props);
}
