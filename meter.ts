/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * MeterElementProps are the props for the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Element/meter) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/meter>
 */
export interface MeterElementProps extends GlobalAttributes {
  /**
   * `high` is an attribute of the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Element/meter) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/meter#high>
   */
  high?: string | undefined;
  /**
   * `low` is an attribute of the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Element/meter) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/meter#low>
   */
  low?: string | undefined;
  /**
   * `max` is an attribute of the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Element/meter) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/meter#max>
   */
  max?: string | undefined;
  /**
   * `min` is an attribute of the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Element/meter) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/meter#min>
   */
  min?: string | undefined;
  /**
   * `optimum` is an attribute of the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Element/meter) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/meter#optimum>
   */
  optimum?: string | undefined;
  /**
   * `value` is an attribute of the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Element/meter) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/meter#value>
   */
  value?: string | undefined;
}

/**
 * meter renders the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Element/meter) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/meter>
 */
export function meter(
  props?: MeterElementProps,
  ...children: string[]
): string {
  return renderElement("meter", props as AnyProps, false, children);
}
