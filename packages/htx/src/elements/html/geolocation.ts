/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GeolocationElementProps } from "@fartlabs/ht/html/geolocation";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { GeolocationElementProps };

/**
 * GEOLOCATION renders the [`geolocation`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/geolocation) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/geolocation>
 * @experimental
 */
export function GEOLOCATION(
  props?: GeolocationElementProps & {
    children?: string | string[] | undefined;
  },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "geolocation",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
