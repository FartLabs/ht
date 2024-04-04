import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * PreProps are the props for the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Element/pre) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/pre>
 */
export interface PreProps extends GlobalAttributes {
  /** @deprecated */
  cols?: string | undefined;
  /** @deprecated */
  width?: string | undefined;
  /** @deprecated */
  wrap?: string | undefined;
}

/**
 * pre renders the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Element/pre) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/pre>
 */
export function pre(props?: PreProps, ...children: string[]): string {
  return renderElement("pre", props as AnyProps, false, children);
}
