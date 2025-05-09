/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * HrElementProps are the props for the [`hr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr>
 */
export interface HrElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`hr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `color` is an attribute of the [`hr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr#color>
   * @deprecated
   */
  color?: string | undefined;
  /**
   * `noshade` is an attribute of the [`hr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr#noshade>
   * @deprecated
   */
  noshade?: string | undefined;
  /**
   * `size` is an attribute of the [`hr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr#size>
   * @deprecated
   */
  size?: string | undefined;
  /**
   * `width` is an attribute of the [`hr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr#width>
   * @deprecated
   */
  width?: string | undefined;
}

/**
 * hr renders the [`hr`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr>
 */
export function hr(props?: HrElementProps): string {
  return renderElement("hr", props as AnyProps, true);
}
