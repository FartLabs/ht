import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * SampElementProps are the props for the [`samp`](https://developer.mozilla.org/docs/Web/HTML/Element/samp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/samp>
 */
export interface SampElementProps extends GlobalAttributes {
}

/**
 * samp renders the [`samp`](https://developer.mozilla.org/docs/Web/HTML/Element/samp) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/samp>
 */
export function samp(props?: SampElementProps, ...children: string[]): string {
  return renderElement("samp", props as AnyProps, false, children);
}
