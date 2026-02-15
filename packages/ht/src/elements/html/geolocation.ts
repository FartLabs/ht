/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * GeolocationElementProps are the props for the [`geolocation`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/geolocation) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/geolocation>
 * @experimental
 */
export interface GeolocationElementProps extends GlobalAttributes {
  /**
   * `autolocate` is an attribute of the [`geolocation`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/geolocation) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/geolocation#autolocate>
   * @experimental
   */
  autolocate?: string | undefined;
  /**
   * `watch` is an attribute of the [`geolocation`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/geolocation) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/geolocation#watch>
   * @experimental
   */
  watch?: string | undefined;
}

/**
 * geolocation renders the [`geolocation`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/geolocation) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/geolocation>
 * @experimental
 */
export function geolocation(
  props?: GeolocationElementProps,
  ...children: string[]
): string {
  return renderElement("geolocation", props as AnyProps, false, children);
}
