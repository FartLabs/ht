import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TbodyProps are the props for the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Element/tbody) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tbody>
 */
export interface TbodyProps extends GlobalAttributes {
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
 * tbody renders the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Element/tbody) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/tbody>
 */
export function tbody(props?: TbodyProps, ...children: string[]): string {
  return renderElement("tbody", props as AnyProps, false, children);
}
