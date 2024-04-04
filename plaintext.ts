import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * plaintext renders the [`plaintext`](https://developer.mozilla.org/docs/Web/HTML/Element/plaintext) element.
 * @deprecated
 */
export function plaintext(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("plaintext", props);
}
