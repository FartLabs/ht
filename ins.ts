import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * InsProps are the props for the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Element/ins) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/ins>
 */
export interface InsProps extends GlobalAttributes {
  cite?: string | undefined;
  datetime?: string | undefined;
}

/**
 * ins renders the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Element/ins) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/ins>
 */
export function ins(props?: InsProps, ...children: string[]): string {
  return renderElement("ins", props as AnyProps, false, children);
}
