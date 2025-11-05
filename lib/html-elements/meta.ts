/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * MetaElementProps are the props for the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta>
 */
export interface MetaElementProps extends GlobalAttributes {
  /**
   * `charset` is an attribute of the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta#charset>
   */
  charset?: string | undefined;
  /**
   * `content` is an attribute of the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta#content>
   */
  content?: string | undefined;
  /**
   * `http-equiv` is an attribute of the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta#http-equiv>
   */
  "http-equiv"?: string | undefined;
  /**
   * `name` is an attribute of the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta#name>
   */
  name?: string | undefined;
  /**
   * `scheme` is an attribute of the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta#scheme>
   * @deprecated
   */
  scheme?: string | undefined;
}

/**
 * meta renders the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta>
 */
export function meta(props?: MetaElementProps): string {
  return renderElement("meta", props as AnyProps, true);
}
