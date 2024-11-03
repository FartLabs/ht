/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * IframeElementProps are the props for the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/iframe>
 */
export interface IframeElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element.
   * @deprecated
   */
  align?: string | undefined;
  /** `allow` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element. */
  allow?: string | undefined;
  /** `allowfullscreen` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element. */
  allowfullscreen?: string | undefined;
  /**
   * `allowpaymentrequest` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element.
   * @deprecated
   */
  allowpaymentrequest?: string | undefined;
  /**
   * `browsingtopics` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element.
   * @experimental
   */
  browsingtopics?: string | undefined;
  /**
   * `credentialless` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element.
   * @experimental
   */
  credentialless?: string | undefined;
  /**
   * `csp` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element.
   * @experimental
   */
  csp?: string | undefined;
  /**
   * `frameborder` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element.
   * @deprecated
   */
  frameborder?: string | undefined;
  /** `height` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element. */
  height?: string | undefined;
  /** `loading` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element. */
  loading?: string | undefined;
  /**
   * `longdesc` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element.
   * @deprecated
   */
  longdesc?: string | undefined;
  /**
   * `marginheight` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element.
   * @deprecated
   */
  marginheight?: string | undefined;
  /**
   * `marginwidth` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element.
   * @deprecated
   */
  marginwidth?: string | undefined;
  /** `name` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element. */
  name?: string | undefined;
  /** `referrerpolicy` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element. */
  referrerpolicy?: string | undefined;
  /** `sandbox` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element. */
  sandbox?: string | undefined;
  /**
   * `scrolling` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element.
   * @deprecated
   */
  scrolling?: string | undefined;
  /** `src` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element. */
  src?: string | undefined;
  /** `srcdoc` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element. */
  srcdoc?: string | undefined;
  /** `width` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element. */
  width?: string | undefined;
}

/**
 * iframe renders the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/iframe>
 */
export function iframe(
  props?: IframeElementProps,
  ...children: string[]
): string {
  return renderElement("iframe", props as AnyProps, false, children);
}
