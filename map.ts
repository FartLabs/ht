/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * MapElementProps are the props for the [`map`](https://developer.mozilla.org/docs/Web/HTML/Element/map) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/map>
 */
export interface MapElementProps extends GlobalAttributes {
  /** `name` is an attribute of the [`map`](https://developer.mozilla.org/docs/Web/HTML/Element/map) element. */
  name?: string | undefined;
}

/**
 * map renders the [`map`](https://developer.mozilla.org/docs/Web/HTML/Element/map) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/map>
 */
export function map(props?: MapElementProps, ...children: string[]): string {
  return renderElement("map", props as AnyProps, false, children);
}
