import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * IframeProps are the props for the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/iframe>
 */
export interface IframeProps extends GlobalAttributes {
  /** @deprecated */
  align?: string | undefined;
  allow?: string | undefined;
  allowfullscreen?: string | undefined;
  /** @deprecated */
  allowpaymentrequest?: string | undefined;
  /** @experimental */
  browsingtopics?: string | undefined;
  /** @experimental */
  credentialless?: string | undefined;
  /** @experimental */
  csp?: string | undefined;
  /** @deprecated */
  frameborder?: string | undefined;
  height?: string | undefined;
  loading?: string | undefined;
  /** @deprecated */
  longdesc?: string | undefined;
  /** @deprecated */
  marginheight?: string | undefined;
  /** @deprecated */
  marginwidth?: string | undefined;
  name?: string | undefined;
  referrerpolicy?: string | undefined;
  sandbox?: string | undefined;
  /** @deprecated */
  scrolling?: string | undefined;
  src?: string | undefined;
  srcdoc?: string | undefined;
  width?: string | undefined;
}

/**
 * iframe renders the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Element/iframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/iframe>
 */
export function iframe(props?: IframeProps, ...children: string[]): string {
  return renderElement("iframe", props as AnyProps, false, children);
}
