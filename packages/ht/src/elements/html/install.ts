/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * InstallElementProps are the props for the [`install`](undefined) element.
 * @experimental
 */
export interface InstallElementProps extends GlobalAttributes {
  /**
   * `manifest` is an attribute of the [`install`](undefined) element.
   * @see <undefined#manifest>
   * @experimental
   */
  manifest?: string | undefined;
  /**
   * `manifestId` is an attribute of the [`install`](undefined) element.
   * @see <undefined#manifestId>
   * @experimental
   */
  manifestId?: string | undefined;
}

/**
 * install renders the [`install`](undefined) element.
 * @experimental
 */
export function install(
  props?: InstallElementProps,
  ...children: string[]
): string {
  return renderElement("install", props as AnyProps, false, children);
}
