import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * LegendElementProps are the props for the [`legend`](https://developer.mozilla.org/docs/Web/HTML/Element/legend) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/legend>
 */
export interface LegendElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`legend`](https://developer.mozilla.org/docs/Web/HTML/Element/legend) element.
   * @deprecated
   */
  align?: string | undefined;
}

/**
 * legend renders the [`legend`](https://developer.mozilla.org/docs/Web/HTML/Element/legend) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/legend>
 */
export function legend(
  props?: LegendElementProps,
  ...children: string[]
): string {
  return renderElement("legend", props as AnyProps, false, children);
}
