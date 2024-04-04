import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * QProps are the props for the [`q`](https://developer.mozilla.org/docs/Web/HTML/Element/q) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/q
 */
export interface QProps extends GlobalAttributes {
  cite?: string | undefined;
}

/** q renders the [`q`](https://developer.mozilla.org/docs/Web/HTML/Element/q) element. */
export function q(props?: QProps & ChildrenProps): string {
  return renderElement("q", props);
}
