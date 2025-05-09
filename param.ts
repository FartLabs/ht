/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ParamElementProps are the props for the [`param`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param>
 * @deprecated
 */
export interface ParamElementProps extends GlobalAttributes {
  /**
   * `name` is an attribute of the [`param`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param#name>
   * @deprecated
   */
  name?: string | undefined;
  /**
   * `type` is an attribute of the [`param`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param#type>
   * @deprecated
   */
  type?: string | undefined;
  /**
   * `value` is an attribute of the [`param`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param#value>
   * @deprecated
   */
  value?: string | undefined;
  /**
   * `valuetype` is an attribute of the [`param`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param#valuetype>
   * @deprecated
   */
  valuetype?: string | undefined;
}

/**
 * param renders the [`param`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param>
 * @deprecated
 */
export function param(props?: ParamElementProps): string {
  return renderElement("param", props as AnyProps, true);
}
