import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * DivProps are the props for the [`div`](https://developer.mozilla.org/docs/Web/HTML/Element/div) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/div>
 */
export interface DivProps extends GlobalAttributes {
  /** @deprecated */
  align?: string | undefined;
}

/**
 * div renders the [`div`](https://developer.mozilla.org/docs/Web/HTML/Element/div) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/div>
 */
export function div(props?: DivProps, ...children: string[]): string {
  return renderElement("div", props as AnyProps, false, children);
}
