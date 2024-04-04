import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * noframes renders the [`noframes`](https://developer.mozilla.org/docs/Web/HTML/Element/noframes) element.
 * @deprecated
 */
export function noframes(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("noframes", props);
}
