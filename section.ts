import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * SectionElementProps are the props for the [`section`](https://developer.mozilla.org/docs/Web/HTML/Element/section) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/section>
 */
export interface SectionElementProps extends GlobalAttributes {
}

/**
 * section renders the [`section`](https://developer.mozilla.org/docs/Web/HTML/Element/section) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/section>
 */
export function section(
  props?: SectionElementProps,
  ...children: string[]
): string {
  return renderElement("section", props as AnyProps, false, children);
}
