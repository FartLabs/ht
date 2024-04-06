import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * AElementProps are the props for the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a>
 */
export interface AElementProps extends GlobalAttributes {
  /**
   * `attributionsrc` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @experimental
   */
  attributionsrc?: string | undefined;
  /**
   * `charset` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @deprecated
   */
  charset?: string | undefined;
  /**
   * `coords` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @deprecated
   */
  coords?: string | undefined;
  /** `download` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element. */
  download?: string | undefined;
  /** `href` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element. */
  href?: string | undefined;
  /** `hreflang` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element. */
  hreflang?: string | undefined;
  /**
   * `name` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @deprecated
   */
  name?: string | undefined;
  /** `ping` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element. */
  ping?: string | undefined;
  /** `referrerpolicy` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element. */
  referrerpolicy?: string | undefined;
  /** `rel` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element. */
  rel?: string | undefined;
  /**
   * `rev` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @deprecated
   */
  rev?: string | undefined;
  /**
   * `shape` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @deprecated
   */
  shape?: string | undefined;
  /** `target` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element. */
  target?: string | undefined;
  /** `type` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element. */
  type?: string | undefined;
}

/**
 * a renders the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a>
 */
export function a(props?: AElementProps, ...children: string[]): string {
  return renderElement("a", props as AnyProps, false, children);
}
