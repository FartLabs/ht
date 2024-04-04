import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * noframes renders the [`noframes`](https://developer.mozilla.org/docs/Web/HTML/Element/noframes) element.
 * @deprecated
 */
export function noframes(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("noframes", props);
}
