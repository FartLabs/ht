import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * DataElementProps are the props for the [`data`](https://developer.mozilla.org/docs/Web/HTML/Element/data) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/data>
 */
export interface DataElementProps extends GlobalAttributes {
  /** `value` is an attribute of the [`data`](https://developer.mozilla.org/docs/Web/HTML/Element/data) element. */
  value?: string | undefined;
}

/**
 * data renders the [`data`](https://developer.mozilla.org/docs/Web/HTML/Element/data) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/data>
 */
export function data(props?: DataElementProps, ...children: string[]): string {
  return renderElement("data", props as AnyProps, false, children);
}
