import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * InsElementProps are the props for the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Element/ins) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/ins>
 */
export interface InsElementProps extends GlobalAttributes {
  /** `cite` is an attribute of the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Element/ins) element. */
  cite?: string | undefined;
  /** `datetime` is an attribute of the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Element/ins) element. */
  datetime?: string | undefined;
}

/**
 * ins renders the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Element/ins) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/ins>
 */
export function ins(props?: InsElementProps, ...children: string[]): string {
  return renderElement("ins", props as AnyProps, false, children);
}
