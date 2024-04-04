import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * BaseProps are the props for the [`base`](https://developer.mozilla.org/docs/Web/HTML/Element/base) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/base>
 */
export interface BaseProps extends GlobalAttributes {
  href?: string | undefined;
  target?: string | undefined;
}

/**
 * base renders the [`base`](https://developer.mozilla.org/docs/Web/HTML/Element/base) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/base>
 */
export function base(props?: BaseProps): string {
  return renderElement("base", props as AnyProps, true);
}
