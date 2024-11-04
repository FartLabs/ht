/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * AElementProps are the props for the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a>
 */
export interface AElementProps extends GlobalAttributes {
  /**
   * `attributionsrc` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a#attributionsrc>
   * @experimental
   */
  attributionsrc?: string | undefined;
  /**
   * `charset` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a#charset>
   * @deprecated
   */
  charset?: string | undefined;
  /**
   * `coords` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a#coords>
   * @deprecated
   */
  coords?: string | undefined;
  /**
   * `download` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a#download>
   */
  download?: string | undefined;
  /**
   * `href` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a#href>
   */
  href?: string | undefined;
  /**
   * `hreflang` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a#hreflang>
   */
  hreflang?: string | undefined;
  /**
   * `name` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a#name>
   * @deprecated
   */
  name?: string | undefined;
  /**
   * `ping` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a#ping>
   */
  ping?: string | undefined;
  /**
   * `referrerpolicy` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a#referrerpolicy>
   */
  referrerpolicy?: string | undefined;
  /**
   * `rel` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a#rel>
   */
  rel?: string | undefined;
  /**
   * `rev` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a#rev>
   * @deprecated
   */
  rev?: string | undefined;
  /**
   * `shape` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a#shape>
   * @deprecated
   */
  shape?: string | undefined;
  /**
   * `target` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a#target>
   */
  target?: string | undefined;
  /**
   * `type` is an attribute of the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a#type>
   */
  type?: string | undefined;
}

/**
 * a renders the [`a`](https://developer.mozilla.org/docs/Web/HTML/Element/a) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/a>
 */
export function a(props?: AElementProps, ...children: string[]): string {
  return renderElement("a", props as AnyProps, false, children);
}
