/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * UsermediaElementProps are the props for the [`usermedia`](undefined) element.
 * @experimental
 */
export interface UsermediaElementProps extends GlobalAttributes {
}

/**
 * usermedia renders the [`usermedia`](undefined) element.
 * @experimental
 */
export function usermedia(
  props?: UsermediaElementProps,
  ...children: string[]
): string {
  return renderElement("usermedia", props as AnyProps, false, children);
}
