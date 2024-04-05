import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * DfnElementProps are the props for the [`dfn`](https://developer.mozilla.org/docs/Web/HTML/Element/dfn) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dfn>
 */
export type DfnElementProps = GlobalAttributes;

/**
 * dfn renders the [`dfn`](https://developer.mozilla.org/docs/Web/HTML/Element/dfn) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dfn>
 */
export function dfn(props?: DfnElementProps, ...children: string[]): string {
  return renderElement("dfn", props as AnyProps, false, children);
}
