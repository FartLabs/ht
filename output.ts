import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * OutputElementProps are the props for the [`output`](https://developer.mozilla.org/docs/Web/HTML/Element/output) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/output>
 */
export interface OutputElementProps extends GlobalAttributes {
  /** `for` is an attribute of the [`output`](https://developer.mozilla.org/docs/Web/HTML/Element/output) element. */
  for?: string | undefined;
  /** `form` is an attribute of the [`output`](https://developer.mozilla.org/docs/Web/HTML/Element/output) element. */
  form?: string | undefined;
  /** `name` is an attribute of the [`output`](https://developer.mozilla.org/docs/Web/HTML/Element/output) element. */
  name?: string | undefined;
}

/**
 * output renders the [`output`](https://developer.mozilla.org/docs/Web/HTML/Element/output) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/output>
 */
export function output(
  props?: OutputElementProps,
  ...children: string[]
): string {
  return renderElement("output", props as AnyProps, false, children);
}
