import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * plaintext renders the [`plaintext`](https://developer.mozilla.org/docs/Web/HTML/Element/plaintext) element.
 * @deprecated
 */
export function plaintext(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("plaintext", props);
}
