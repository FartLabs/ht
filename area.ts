/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * AreaElementProps are the props for the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/area>
 */
export interface AreaElementProps extends GlobalAttributes {
  /**
   * `alt` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/area#alt>
   */
  alt?: string | undefined;
  /**
   * `coords` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/area#coords>
   */
  coords?: string | undefined;
  /**
   * `download` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/area#download>
   */
  download?: string | undefined;
  /**
   * `href` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/area#href>
   */
  href?: string | undefined;
  /**
   * `nohref` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/area#nohref>
   * @deprecated
   */
  nohref?: string | undefined;
  /**
   * `ping` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/area#ping>
   */
  ping?: string | undefined;
  /**
   * `referrerpolicy` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/area#referrerpolicy>
   */
  referrerpolicy?: string | undefined;
  /**
   * `rel` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/area#rel>
   */
  rel?: string | undefined;
  /**
   * `shape` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/area#shape>
   */
  shape?: string | undefined;
  /**
   * `target` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/area#target>
   */
  target?: string | undefined;
}

/**
 * area renders the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/area>
 */
export function area(props?: AreaElementProps): string {
  return renderElement("area", props as AnyProps, true);
}
