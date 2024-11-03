/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * MetaElementProps are the props for the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Element/meta) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/meta>
 */
export interface MetaElementProps extends GlobalAttributes {
  /** `charset` is an attribute of the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Element/meta) element. */
  charset?: string | undefined;
  /** `content` is an attribute of the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Element/meta) element. */
  content?: string | undefined;
  /** `http-equiv` is an attribute of the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Element/meta) element. */
  "http-equiv"?: string | undefined;
  /** `name` is an attribute of the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Element/meta) element. */
  name?: string | undefined;
  /**
   * `scheme` is an attribute of the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Element/meta) element.
   * @deprecated
   */
  scheme?: string | undefined;
}

/**
 * meta renders the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Element/meta) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/meta>
 */
export function meta(props?: MetaElementProps): string {
  return renderElement("meta", props as AnyProps, true);
}
