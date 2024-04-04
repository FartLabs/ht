import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TfootProps are the props for the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tfoot>
 */
export interface TfootProps extends GlobalAttributes {
  /** @deprecated */
  align?: string | undefined;
  /** @deprecated */
  bgcolor?: string | undefined;
  /** @deprecated */
  char?: string | undefined;
  /** @deprecated */
  charoff?: string | undefined;
  /** @deprecated */
  valign?: string | undefined;
}

/**
 * tfoot renders the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tfoot>
 */
export function tfoot(props?: TfootProps, ...children: string[]): string {
  return renderElement("tfoot", props as AnyProps, false, children);
}
