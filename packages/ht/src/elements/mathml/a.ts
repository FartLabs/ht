/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/** AElementProps are the props for the [`a`](undefined) element. */
export interface AElementProps extends GlobalAttributes {
  /**
   * `href` is an attribute of the [`a`](undefined) element.
   * @see <undefined#href>
   */
  href?: string | undefined;
}

/** a renders the [`a`](undefined) element. */
export function a(props?: AElementProps, ...children: string[]): string {
  return renderElement("a", props as AnyProps, false, children);
}
