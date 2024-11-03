/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ParamElementProps are the props for the [`param`](https://developer.mozilla.org/docs/Web/HTML/Element/param) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/param>
 * @deprecated
 */
export interface ParamElementProps extends GlobalAttributes {
  /**
   * `name` is an attribute of the [`param`](https://developer.mozilla.org/docs/Web/HTML/Element/param) element.
   * @deprecated
   */
  name?: string | undefined;
  /**
   * `type` is an attribute of the [`param`](https://developer.mozilla.org/docs/Web/HTML/Element/param) element.
   * @deprecated
   */
  type?: string | undefined;
  /**
   * `value` is an attribute of the [`param`](https://developer.mozilla.org/docs/Web/HTML/Element/param) element.
   * @deprecated
   */
  value?: string | undefined;
  /**
   * `valuetype` is an attribute of the [`param`](https://developer.mozilla.org/docs/Web/HTML/Element/param) element.
   * @deprecated
   */
  valuetype?: string | undefined;
}

/**
 * param renders the [`param`](https://developer.mozilla.org/docs/Web/HTML/Element/param) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/param>
 * @deprecated
 */
export function param(props?: ParamElementProps): string {
  return renderElement("param", props as AnyProps, true);
}
