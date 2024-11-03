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
  /** `alt` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element. */
  alt?: string | undefined;
  /** `coords` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element. */
  coords?: string | undefined;
  /** `download` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element. */
  download?: string | undefined;
  /** `href` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element. */
  href?: string | undefined;
  /**
   * `nohref` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
   * @deprecated
   */
  nohref?: string | undefined;
  /** `ping` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element. */
  ping?: string | undefined;
  /** `referrerpolicy` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element. */
  referrerpolicy?: string | undefined;
  /** `rel` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element. */
  rel?: string | undefined;
  /** `shape` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element. */
  shape?: string | undefined;
  /**
   * `tabindex` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
   * @deprecated
   */
  tabindex?: string | undefined;
  /** `target` is an attribute of the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element. */
  target?: string | undefined;
}

/**
 * area renders the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/area>
 */
export function area(props?: AreaElementProps): string {
  return renderElement("area", props as AnyProps, true);
}
