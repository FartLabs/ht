import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ColProps are the props for the [`col`](https://developer.mozilla.org/docs/Web/HTML/Element/col) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/col>
 */
export interface ColProps extends GlobalAttributes {
  /** @deprecated */
  align?: string | undefined;
  /** @deprecated */
  char?: string | undefined;
  /** @deprecated */
  charoff?: string | undefined;
  span?: string | undefined;
  /** @deprecated */
  valign?: string | undefined;
  /** @deprecated */
  width?: string | undefined;
}

/**
 * col renders the [`col`](https://developer.mozilla.org/docs/Web/HTML/Element/col) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/col>
 */
export function col(props?: ColProps): string {
  return renderElement("col", props as AnyProps, true);
}
