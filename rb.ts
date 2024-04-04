import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * rb renders the [`rb`](https://developer.mozilla.org/docs/Web/HTML/Element/rb) element.
 * @deprecated
 */
export function rb(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("rb", props);
}
